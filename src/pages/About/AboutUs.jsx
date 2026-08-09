import React, { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us — SCPAF";
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* HERO IMAGE WITH LEFT OVERLAY PANEL */}
      <section className="relative w-full mb-20">

        {/* HERO IMAGE */}
        <img
          src="/images/about-hero.png"
          alt="About SCPAF Hero"
          className="w-full h-[420px] md:h-[520px] object-cover rounded-xl shadow-lg"
        />

        {/* OVERLAY PANEL — positioned higher */}
        <div className="absolute top-5 left-5">
          <div className="bg-[#1E2248]/90 text-white px-8 py-6 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold">About SCPAF</h2>
          </div>
        </div>

      </section>

      
      {/* Main About Text */}
      <div className="mt-6 space-y-6 text-lg text-slate-700 leading-relaxed">
        <p>
          The Sickle Cell Prevention and Aids Foundation (SCPAF) is a registered
          non-profit organization with the Corporate Affairs Commission (CAC)
          of Nigeria (2026). We are committed to improving the lives of
          individuals living with Sickle Cell Disease (SCD), their families,
          and communities through prevention, education, advocacy, and improved
          access to quality healthcare.
        </p>

        <p>
          Our work focuses on reducing the physical, emotional, social, and
          economic burden of SCD by promoting early diagnosis, expanding access
          to essential care, combating stigma, and supporting vulnerable
          families. We believe that every child born with sickle cell disease
          deserves the opportunity to live a healthy, productive, and dignified
          life.
        </p>

        <p>
          Through evidence-based programs and community partnerships, SCPAF
          seeks to create lasting change while empowering individuals and
          communities with the knowledge and resources needed to prevent and
          effectively manage sickle cell disease.
        </p>
      </div>

      {/* Panel 1 - Two Column Layout */}
      <section className="mt-16 bg-[#E6E9EF] p-8 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D1B2A]">
              Answering a Nation's Call to Action
            </h2>

            <ul className="mt-4 space-y-4 text-lg text-slate-700 leading-relaxed list-disc pl-6">
              <li>
                Nigeria bears the world's highest burden of sickle cell disease,
                with over 40 million people carrying the sickle cell gene and
                approximately 150,000 babies born with SCD every year.
              </li>

              <li>
                Thousands of children die unnecessarily each year. An estimated
                35,000 under-five deaths annually in Nigeria are attributable to
                sickle cell disease, while many affected children die before
                reaching their fifth birthday due to delayed diagnosis and
                inadequate access to care.
              </li>

              <li>
                Most of these deaths are preventable through voluntary genotype
                testing and counselling, newborn screening, early diagnosis,
                comprehensive treatment, and improved access to essential
                healthcare.
              </li>

              <li>
                SCPAF exists to change this reality by partnering with
                communities, government institutions, healthcare providers, and
                non-profit organizations to prevent new cases, improve access to
                care, reduce stigma, and save lives.
              </li>
            </ul>
          </div>

          {/* Right Column — Panel 1 Image */}
          <div className="flex items-center justify-center">
            <img
              src="/images/scpaf-image2.png"
              alt="SCPAF community collaboration"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Panel 2 - Two Column Layout WITH landing-page colour */}
      <section className="mt-10 bg-[#1E2248] p-8 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left Column — Panel 2 Image */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <img
              src="/images/scpaf-meeting.png"
              alt="SCPAF community collaboration"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-white">
              Working Together for Greater Impact
            </h2>

            <div className="mt-4 space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                SCPAF recognizes that sustainable change is achieved through
                collaboration rather than duplication of efforts. We work in
                partnership with government ministries, public healthcare
                institutions, teaching hospitals, primary healthcare centres,
                educational institutions, faith-based organizations, community
                leaders, and other non-profit organizations to strengthen
                existing sickle cell programs and expand their reach.
              </p>

              <p>
                By leveraging shared expertise, resources, and community
                networks, we aim to increase awareness, improve access to
                quality healthcare, support research and innovation, and
                advocate for policies that benefit individuals and families
                affected by sickle cell disease throughout Nigeria.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
