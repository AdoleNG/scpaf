import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-[#E6E9EF] text-[#0D1B2A] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="SCPAF logo" className="h-14 w-auto object-contain" />
          <span className="text-xl font-bold text-[#0D1B2A]">SCPAF</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">

          {/* About Dropdown */}
          <div className="relative group py-2">
            <button className="font-medium flex items-center gap-1">About SCPAF</button>
            <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/about/about-us" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">About Us</Link>
              <Link to="/about/our-board" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">Our Board</Link>
              <Link to="/about/our-staff" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">Our Staff</Link>
              <Link to="/about/what-is-scd" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">What is SCD?</Link>
            </div>
          </div>

          {/* Warriors Dropdown */}
          <div className="relative group py-2">
            <button className="font-medium flex items-center gap-1">Warriors & Caregivers</button>
            <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/warriors/chw-support" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">CHW Support Services</Link>
              <Link to="/warriors/programs" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">Programs</Link>
              <Link to="/warriors/resources" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">Resources</Link>
              <Link to="/warriors/clinics" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">Clinics</Link>
              <Link to="/warriors/register" className="block px-4 py-2.5 hover:bg-slate-100 text-red-600 font-semibold">Warrior Registration</Link>
            </div>
          </div>

          {/* Standalone Volunteer Tab */}
          <Link to="/warriors/volunteer" className="font-medium hover:text-red-600 transition">
            Volunteer
          </Link>

          {/* Sponsors Dropdown */}
          <div className="relative group py-2">
            <button className="font-medium flex items-center gap-1">Sponsors & Supporters</button>
            <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/sponsors/become-a-sponsor" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">Become A Sponsor</Link>
              <Link to="/sponsors/donate" className="block px-4 py-2.5 hover:bg-slate-100 text-[#0D1B2A]">Donate</Link>
            </div>
          </div>
        </div>

        {/* Donate CTA */}
        <Link
          to="/sponsors/donate"
          className="hidden md:inline-block bg-red-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-red-700 transition"
        >
          Donate
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0D1B2A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#E6E9EF] shadow-lg p-4 space-y-3 text-[#0D1B2A] border-t border-slate-300">
          <Link to="/about/about-us" onClick={() => setMobileOpen(false)} className="block py-1">About Us</Link>
          <Link to="/warriors/chw-support" onClick={() => setMobileOpen(false)} className="block py-1">CHW Support Services</Link>
          <Link to="/warriors/programs" onClick={() => setMobileOpen(false)} className="block py-1">Programs</Link>
          <Link to="/warriors/resources" onClick={() => setMobileOpen(false)} className="block py-1">Resources</Link>
          <Link to="/warriors/clinics" onClick={() => setMobileOpen(false)} className="block py-1">Clinics</Link>
          <Link to="/warriors/register" onClick={() => setMobileOpen(false)} className="block py-1 font-semibold text-red-600">Warrior Registration</Link>
          <Link to="/warriors/volunteer" onClick={() => setMobileOpen(false)} className="block py-1">Volunteer</Link>
          <Link to="/sponsors/become-a-sponsor" onClick={() => setMobileOpen(false)} className="block py-1">Become A Sponsor</Link>
          <Link to="/sponsors/donate" onClick={() => setMobileOpen(false)} className="block py-2 font-bold text-red-600">Donate</Link>
        </div>
      )}
    </nav>
  );
}