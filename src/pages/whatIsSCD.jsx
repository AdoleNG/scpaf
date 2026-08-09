import React, { useEffect } from "react";

export default function WhatIsSCD() {
  useEffect(() => {
    document.title = "What is Sickle Cell Disease — SCPAF";
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A]">
        What is Sickle Cell Disease?
      </h1>

      <div className="mt-6 space-y-6 text-lg text-slate-700 leading-relaxed">
        <p>
          Sickle cell disease (SCD) is an inherited blood disorder that affects
          the structure and function of red blood cells. Instead of being round
          and flexible, the cells become rigid and sickle-shaped, blocking blood
          flow and reducing oxygen delivery throughout the body.
        </p>

        <p>
          SCD can cause severe pain, infections, organ damage, and other
          complications. Early diagnosis, comprehensive care, and preventive
          strategies can significantly improve outcomes and quality of life.
        </p>
      </div>
    </main>
  );
}
