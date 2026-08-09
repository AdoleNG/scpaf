import React, { useEffect } from "react";

export default function WhatIsSCD() {
  useEffect(() => {
    document.title = "What is Sickle Cell Disease — SCPAF";
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* HERO SECTION */}
      <section className="relative w-full mb-20">
        <img
          src="/images/what-is-scd-hero.png"
          alt="What is Sickle Cell Disease Hero"
          className="w-full h-[420px] md:h-[520px] object-cover rounded-xl shadow-lg"
        />

        {/* OVERLAY TEXT — CENTERED LIKE SAMPLE */}
        <div className="absolute inset-0 flex items-center">
          <div className="bg-[#1E2248]/90 text-white px-10 py-8 rounded-xl shadow-xl mx-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              What is Sickle Cell Disease?
            </h1>
          </div>
        </div>
      </section>

      {/* PREVALENCE SENTENCE — CLEAN, CENTERED, PROFESSIONAL */}
      <section className="mb-16">
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
          Nigeria has the <strong>highest sickle cell burden in the world</strong>,
          with an estimated <strong>40 million carriers (AS)</strong> and
          <strong>150,000 babies born with Sickle Cell Disease every year</strong>.
          Sadly, <strong>50–70% of affected children</strong> do not survive past
          age five due to late diagnosis and limited access to care.
        </p>
      </section>

      {/* MINI PANELS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* PANEL 1 — Sickle Cell Disease */}
        <div className="bg-[#1E2248] text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Sickle Cell Disease</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Sickle Cell Disease (SCD) is an inherited blood disorder in which red
            blood cells become rigid and sickle‑shaped, blocking blood flow and
            reducing oxygen delivery throughout the body. It can cause pain
            crises, infections, organ damage, and other complications.
          </p>
        </div>

        {/* PANEL 2 — Sickle Cell Trait */}
        <div className="bg-[#E6E9EF] text-[#0D1B2A] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Sickle Cell Trait</h2>
          <p className="text-lg leading-relaxed">
            Sickle Cell Trait (SCT) means a person carries one sickle cell gene
            but does not have the disease. Individuals with SCT usually do not
            experience symptoms but can pass the gene to their children.
          </p>
        </div>

        {/* PANEL 3 — Sickle Cell Thalassemia */}
        <div className="bg-[#8A1C1C] text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Sickle Cell Thalassemia</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Sickle Cell Thalassemia is a genetic condition that combines sickle
            cell disease with thalassemia. Symptoms vary depending on the type
            (HbS/β⁰ or HbS/β⁺), but many individuals experience anemia, pain
            episodes, and other SCD‑related complications.
          </p>
        </div>

        {/* PANEL 4 — Need Support? */}
        <div className="bg-[#1E2248] text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Need Support?</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            SCPAF provides education, counselling, community health worker
            support, and resources for families affected by Sickle Cell Disease.
            Whether you are a warrior, caregiver, or parent, we are here to help.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-[#1E2248] font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-100 transition"
          >
            Contact Us
          </a>
        </div>

      </section>
    </main>
  );
}
