import React from "react";

export default function Programs() {
  return (
    <div className="w-full text-[#0D1B2A] pb-16">
      {/* Hero Banner with brighter overlay */}
      <div 
        className="relative w-full h-80 md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/images/programsimage.png')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            Warriors & Caregivers Programs
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">
            Empowering Lives Through Structured Support
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Discover our targeted programs designed to provide holistic care, medical guidance, and community backing for Sickle Cell Warriors.
          </p>
        </div>

        {/* Programs Grid (4 Programs) */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Program 1 */}
          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div>
              <img 
                src="/images/newbornscreeningimage.png" 
                alt="Newborn Screening and Enhanced Immunization Program" 
                className="w-full h-52 object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'; }}
              />
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Early Care & Health
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0D1B2A]">Newborn Screening and Enhanced Immunization Program</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Focused on early childhood intervention, comprehensive newborn screening, and specialized immunization protocols to protect infants and young children diagnosed with Sickle Cell Disease.
                </p>
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80" 
                alt="BabySteps Parenting Education" 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Parental Guidance
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0D1B2A]">BabySteps Parenting Education (Ages 0-8)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Equipping parents and caregivers with practical skills, pain crisis recognition, hydration guidelines, and emotional tools to nurture children through their critical early developmental years.
                </p>
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80" 
                alt="Community Outreach Program - Radio Talk Show" 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Awareness & Advocacy
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0D1B2A]">Community Outreach Program</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Featuring impactful public awareness campaigns, educational workshops, and engaging radio and TV drama series designed to break social stigmas and promote early genotype testing.
                </p>
              </div>
            </div>
          </div>

          {/* Program 4 */}
          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div>
              <img 
                src="/images/hydroxyureaimage.png" 
                alt="Hydroxyurea Access Program" 
                className="w-full h-52 object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'; }}
              />
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Treatment Subsidies
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0D1B2A]">Hydroxyurea Access Program</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Providing essential treatment subsidies and medication access support through direct partnerships with selected hospitals to make life-saving therapies affordable and available.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}