import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
            <h2 className="text-3xl font-bold">
              Serving with Care and Compassion
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-200">
              SCPAF is committed to empowering warriors, caregivers, and families
              through education, advocacy, and community support.
            </p>

            <Link
              to="/donate"
              className="inline-block mt-6 bg-[#C62828] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
            >
              Support SCPAF
            </Link>
          </div>
        </div>
      </section>

      {/* TWO-PANEL SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT PANEL — ABOUT SCPAF WITH BACKGROUND IMAGE */}
        <div
          className="relative p-10 rounded-xl shadow-lg text-white overflow-hidden"
          style={{
            backgroundImage: "url('/images/panel-about-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark blue overlay */}
          <div className="absolute inset-0 bg-[#1E2248]/80 rounded-xl"></div>

          <div className="relative">
            <h2 className="text-3xl font-bold">About SCPAF</h2>

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
          className="relative p-10 rounded-xl shadow-lg text-white overflow-hidden"
          style={{
            backgroundImage: "url('/images/panel-scd-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Mild blood-red overlay */}
          <div className="absolute inset-0 bg-[#8A1C1C]/80 rounded-xl"></div>

          <div className="relative">
            <h2 className="text-3xl font-bold">What is Sickle Cell Disease?</h2>

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
    </main>
  );
}
