import React from "react";

export default function Partners() {
  // Partner categories with sample data structures
  const partnerCategories = [
    {
      title: "Clinics & Hospitals",
      description: "Healthcare centers providing dedicated care, routine check-ups, and specialized treatment for sickle cell warriors.",
      partners: [
        { name: "General Hospital Nasarawa", location: "Nasarawa, Nigeria", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
        { name: "Federal Medical Center Keffi", location: "Keffi, Nigeria", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      title: "Pharmacies & Medical Suppliers",
      description: "Trusted pharmacy partners helping ensure steady access to critical medications, supplements, and prescriptions.",
      partners: [
        { name: "Community Care Pharmacy", location: "Partner Network", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      title: "Research Institutions",
      description: "Academic and medical research organizations collaborating with us to advance sickle cell education and treatment strategies.",
      partners: [
        { name: "Genomics & Blood Disorders Institute", location: "Collaborative Research", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      title: "Laboratories",
      description: "Diagnostics partners supporting accurate genotype testing, blood profiling, and comprehensive clinical screening.",
      partners: [
        { name: "Reference Diagnostics Lab", location: "Diagnostic Support", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      title: "Major Donors & Corporate Supporters",
      description: "Philanthropic organizations and generous individuals whose sustained financial backing fuels our community programs.",
      partners: [
        { name: "SCPAF Hope Benefactor Network", location: "Global Support", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ];

  return (
    <div className="w-full text-[#0D1B2A] pb-16">
      {/* Hero Banner matching site style */}
      <div 
        className="relative w-full h-80 md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            Our Partners
          </h1>
        </div>
      </div>

      {/* Main Content & Description */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] leading-snug">
              Stronger Together <br />For Our Warriors
            </h2>
          </div>
          <div>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">
              Our mission to support, advocate for, and empower individuals living with Sickle Cell Disease is made possible through the unwavering dedication of our network of partners.
            </p>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              If your clinic, pharmacy, laboratory, or institution is interested in partnering with SCPAF, reach out to us at <a href="mailto:contact@stopsicklecelldisease.org" className="text-red-600 font-semibold hover:underline">contact@stopsicklecelldisease.org</a> or call <a href="tel:+19027897763" className="text-red-600 font-semibold hover:underline">(902) 789-7763</a>.
            </p>
          </div>
        </div>

        {/* Partner Categories Loop */}
        <div className="space-y-16">
          {partnerCategories.map((category, index) => (
            <div key={index} className="border-b border-slate-200 pb-12 last:border-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 max-w-3xl">
                  {category.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.partners.map((partner, pIndex) => (
                  <div 
                    key={pIndex} 
                    className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col"
                  >
                    <div className="h-48 overflow-hidden bg-slate-100">
                      <img 
                        src={partner.image} 
                        alt={partner.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <h4 className="font-bold text-lg text-[#0D1B2A] mb-1">
                          {partner.name}
                        </h4>
                        <p className="text-sm text-slate-500 font-medium">
                          {partner.location}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="inline-block text-xs font-semibold bg-red-50 text-red-600 px-2.5 py-1 rounded">
                          Verified Partner
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA Banner */}
        <div className="mt-16 bg-slate-100 border border-slate-300 rounded-xl p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A] mb-3">
            Become a Partner in Care
          </h3>
          <p className="text-slate-700 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Join our collaborative network and help us expand access to essential resources, medications, and compassionate support for sickle cell warriors.
          </p>
          <a 
            href="mailto:contact@stopsicklecelldisease.org"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg shadow transition text-base"
          >
            Contact Us Today
          </a>
        </div>

      </div>
    </div>
  );
}