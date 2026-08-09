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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

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

      {/* GLOBAL & REGIONAL STATISTICS SECTION */}
      <section className="bg-[#121B35] text-white rounded-2xl p-8 md:p-14 shadow-xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-red-600/20 text-red-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            WHO Insights & Data
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Sickle Cell Disease by the Numbers
          </h2>
          <p className="text-slate-300 mt-2">
            Understanding the global burden and the critical necessity for proactive intervention, screening, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Worldwide Prevalence */}
          <div className="bg-[#1E294B] border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs uppercase tracking-wider font-medium text-red-400">Global Prevalence</span>
              <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">7.74M+</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                People worldwide are living with sickle cell disease.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/40 text-xs text-slate-400">
              World Health Organization Estimates
            </div>
          </div>

          {/* Card 2: Africa & Nigeria Burden */}
          <div className="bg-[#1E294B] border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs uppercase tracking-wider font-medium text-red-400">African Region</span>
              <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">6 Million</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                People in Africa (and specifically in Nigeria) live with SCD, forming the heaviest burden globally.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/40 text-xs text-slate-400">
              Regional Health Indicators
            </div>
          </div>

          {/* Card 3: Nigerian Births */}
          <div className="bg-[#1E294B] border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs uppercase tracking-wider font-medium text-red-400">Nigeria Newborns</span>
              <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">150,000</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Children are born with sickle cell disease in Nigeria each year.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/40 text-xs text-slate-400">
              National Birth Statistics
            </div>
          </div>

          {/* Card 4: Mortality & Critical Care Gap */}
          <div className="bg-[#1E294B] border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs uppercase tracking-wider font-medium text-red-400">Mortality Impact</span>
              <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">50% - 80%</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Estimated child mortality before age 5 in Nigeria and Sub-Saharan Africa without early screening and standard preventive care. Globally, ~81,100 children under 5 die from SCD yearly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/40 text-xs text-slate-400">
              WHO & Global Burden Study
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}