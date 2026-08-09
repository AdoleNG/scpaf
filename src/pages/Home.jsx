import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter submission logic can be placed here
    console.log("Subscribed:", { email, subscribed });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* HERO IMAGE WITH LEFT OVERLAY PANEL */}
      <section className="relative w-full mb-20">
        <img
          src="/images/home-hero.png"
          alt="SCPAF Hero"
          className="w-full h-[420px] md:h-[520px] object-cover rounded-xl shadow-lg"
        />

        {/* OVERLAY PANEL */}
        <div className="absolute top-0 left-0 h-full flex items-center">
          <div className="bg-[#1E2248]/90 text-white p-10 rounded-xl shadow-xl max-w-md ml-10">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              Serving with Care and Compassion
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-200">
              SCPAF is committed to empowering warriors, caregivers, and families
              through education, advocacy, and community support.
            </p>

            <Link
              to="/pages/Sponsors/Donate"
              className="inline-block mt-6 bg-[#C62828] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
            >
              Support SCPAF
            </Link>
          </div>
        </div>
      </section>

      {/* TWO-PANEL SECTION WITH ICONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

        {/* LEFT PANEL — ABOUT SCPAF WITH BACKGROUND IMAGE */}
        <div
          className="relative p-10 rounded-xl shadow-lg text-white overflow-hidden flex flex-col justify-between"
          style={{
            backgroundImage: "url('/images/panel-about-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark blue overlay */}
          <div className="absolute inset-0 bg-[#1E2248]/80 rounded-xl"></div>

          <div className="relative">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl">
                🏛️
              </div>
              <h2 className="text-3xl font-bold">About SCPAF</h2>
            </div>

            <p className="mt-4 text-lg leading-relaxed">
              SCPAF is dedicated to supporting individuals living with sickle cell
              disease and their families through prevention, education, advocacy,
              and improved access to care.
            </p>

            <Link
              to="/about/about-us"
              className="inline-block mt-6 bg-white text-[#1E2248] font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL — WHAT IS SCD WITH BACKGROUND IMAGE + BLOOD RED OVERLAY */}
        <div
          className="relative p-10 rounded-xl shadow-lg text-white overflow-hidden flex flex-col justify-between"
          style={{
            backgroundImage: "url('/images/panel-scd-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Mild blood-red overlay */}
          <div className="absolute inset-0 bg-[#8A1C1C]/80 rounded-xl"></div>

          <div className="relative">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl">
                🩸
              </div>
              <h2 className="text-3xl font-bold">What is Sickle Cell Disease?</h2>
            </div>

            <p className="mt-4 text-lg leading-relaxed">
              Sickle cell disease is an inherited blood disorder that affects the
              structure and function of red blood cells, reducing oxygen delivery
              throughout the body.
            </p>

            <Link
              to="/about/what-is-scd"
              className="inline-block mt-6 bg-white text-[#8A1C1C] font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

      </section>

      {/* GLOBAL PREVALENCE BANNER CARD */}
      <section className="mb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Stats Side matching reference style */}
          <div className="lg:col-span-5 bg-[#1E2248] text-white p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-4">
              <span className="p-3 bg-white/10 rounded-xl text-2xl">🧬</span>
              <span className="text-sm uppercase tracking-wider font-semibold text-red-400">Global Prevalence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
              300,000,000
            </h2>
            <p className="text-gray-200 text-base leading-relaxed">
              Approximately 300 million people have sickle cell trait worldwide.
            </p>
          </div>

          {/* Right Image Side */}
          <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px]">
            <img
              src="/images/globalstatsimage.png"
              alt="Community global statistics support"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E2248]/30 to-transparent lg:hidden"></div>
          </div>

        </div>
      </section>

      {/* GLOBAL & REGIONAL STATISTICS SECTION */}
      <section className="text-white rounded-2xl p-8 md:p-14 shadow-xl bg-[#8A1C1C]/80 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            WHO Insights & Data
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Sickle Cell Disease by the Numbers
          </h2>
          <p className="text-red-100 mt-2">
            Understanding the global burden and the critical necessity for proactive intervention, screening, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Africa & Nigeria Burden */}
          <div className="bg-[#1E294B] border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-medium text-red-400">African Region</span>
                <span className="text-2xl" role="img" aria-label="African Map">🗺️</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">6 Million</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                People in Africa (and specifically in Nigeria) live with SCD, forming the heaviest burden globally.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/40 text-xs text-slate-400">
              Regional Health Indicators
            </div>
          </div>

          {/* Card 2: Nigerian Births */}
          <div className="bg-[#1E294B] border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-medium text-red-400">Nigeria Newborns</span>
                <span className="text-2xl" role="img" aria-label="Nigeria Map">🇳🇬</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">150,000</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Children are born with sickle cell disease in Nigeria each year.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/40 text-xs text-slate-400">
              National Birth Statistics
            </div>
          </div>

          {/* Card 3: Nigerian Trait Carriers */}
          <div className="bg-[#1E294B] border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-medium text-red-400">Trait Carriers</span>
                <span className="text-2xl" role="img" aria-label="Nigeria Map Flag">🇳🇬</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">50 Million</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                An estimated 50 million Nigerians carry the sickle cell trait (HbAS).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/40 text-xs text-slate-400">
              National Carrier Statistics
            </div>
          </div>

          {/* Card 4: Mortality & Critical Care Gap */}
          <div className="bg-[#1E294B] border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-medium text-red-400">Mortality Impact</span>
                <span className="text-xl">⚠️</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">50% - 80%</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Estimated child mortality before age 5 in Nigeria and Sub-Saharan Africa without early screening and standard preventive care. Globally, ~81,100 children under 5 die from SCD yearly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/40 text-xs text-slate-400">
              WHO & Global Burden Study2
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* NEWSLETTER & FOOTER REPLICATION SECTION    */}
      {/* ========================================== */}
      <footer className="rounded-2xl overflow-hidden shadow-2xl">
        
        {/* JOIN THE MOVEMENT / NEWSLETTER BLOCK */}
        <div
          className="relative px-6 py-16 md:px-12 text-white flex flex-col items-start justify-center"
          style={{
            backgroundImage: "url('/images/newsletter-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Deep Navy tint overlay for harmonized palette */}
          <div className="absolute inset-0 bg-[#1E2248]/85"></div>

          <div className="relative z-10 w-full max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-2">
              Join the Movement
            </h2>
            <p className="text-gray-200 text-sm md:text-base mb-6">
              Get the latest news and updates
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium mb-1">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner"
                />
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input
                  id="subscribe-checkbox"
                  type="checkbox"
                  checked={subscribed}
                  onChange={(e) => setSubscribed(e.target.checked)}
                  className="w-4 h-4 rounded text-[#8A1C1C] focus:ring-red-500 bg-white border-none"
                />
                <label htmlFor="subscribe-checkbox" className="text-sm text-gray-200">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#8A1C1C] hover:bg-red-700 text-white font-semibold rounded-md transition duration-200 shadow-md uppercase tracking-wider text-sm mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* 3-COLUMN FOOTER PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 text-white">
          
          {/* Column 1: Contact & Organization Details */}
          <div className="lg:col-span-5 bg-[#2A2E3D] p-8 md:p-10 flex flex-col justify-between text-xs md:text-sm leading-relaxed">
            <div>
              <h3 className="font-bold text-base md:text-lg mb-3">
                Sickle Cell Prevention & Aids Foundation (SCPAF)
              </h3>
              <p className="text-gray-300 mb-2">
                Providing support, advocacy, and educational resources to empower warriors and families affected by sickle cell disease.
              </p>
              <div className="space-y-1 text-gray-300">
                <p><strong>Email:</strong> info@scpaf.org</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-600 text-[11px] text-gray-400 leading-normal">
              <p>
                This platform is dedicated to raising awareness, supporting individuals living with sickle cell disease, and fostering community care.
              </p>
              <Link to="/privacy-policy" className="underline hover:text-white mt-2 inline-block">
                Privacy Policy & Terms
              </Link>
            </div>
          </div>

          {/* Column 2: Helpful Links */}
          <div className="lg:col-span-4 bg-[#1E2248] p-8 md:p-10">
            <h3 className="text-lg font-bold mb-4 text-white">Helpful Links</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <Link to="about/what-is-scd" className="hover:underline flex items-center gap-2">
                  <span className="text-xs">•</span> What is Sickle Cell Disease?
                </Link>
              </li>
              <li>
                <Link to="warriors/programs" className="hover:underline flex items-center gap-2">
                  <span className="text-xs">•</span> Programs & Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:underline flex items-center gap-2">
                  <span className="text-xs">•</span> Resources & Toolkits
                </Link>
              </li>
              <li>
                <Link to="/pages/sponsors/donate" className="hover:underline flex items-center gap-2">
                  <span className="text-xs">•</span> Donate
                </Link>
              </li>
              <li>
                <Link to="/about/about-us" className="hover:underline flex items-center gap-2">
                  <span className="text-xs">•</span> About SCPAF
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="lg:col-span-3 bg-[#8A1C1C] p-8 md:p-10 flex flex-col justify-start">
            <h3 className="text-lg font-bold mb-4 text-white">Connect with us</h3>
            <div className="flex items-center gap-4 text-2xl text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition"
              >
                📘
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="hover:opacity-80 transition"
              >
                𝕏
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:opacity-80 transition"
              >
                🎥
              </a>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}