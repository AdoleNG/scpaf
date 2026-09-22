import React from "react";

export default function Partners() {
  const partnerCategories = [
    {
      title: "Teaching Hospitals & Major Medical Centers",
      description: "Premier academic and referral teaching hospitals offering specialized hematology, blood transfusion, and comprehensive sickle cell management.",
      partners: [
        { 
          name: "University of Abuja Teaching Hospital (UATH)", 
          location: "Gwagwalada, Abuja", 
          image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" 
        },
        { 
          name: "Federal Medical Center (FMC) Keffi", 
          location: "Keffi, Nasarawa State", 
          image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" 
        }
      ]
    },
    {
      title: "Top Specialty & Private Hospitals",
      description: "Leading private healthcare institutions equipped with advanced diagnostic tools, emergency care, and dedicated sickle cell clinics.",
      partners: [
        { 
          name: "Nizamiye Hospital", 
          location: "Jabi, Abuja", 
          image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=600&q=80" 
        },
        { 
          name: "Garki Hospital Abuja", 
          location: "Garki, Abuja", 
          image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" 
        },
        { 
          name: "Nisa Premier Hospital", 
          location: "Jabi, Abuja", 
          image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80" 
        }
      ]
    },
    {
      title: "Laboratories & Diagnostic Centers",
      description: "Trusted diagnostic partners providing accurate genotype screening, comprehensive blood panels, and clinical evaluations.",
      partners: [
        { 
          name: "Clina-Lancet Laboratories", 
          location: "Wuse II & Central Area, Abuja", 
          image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80" 
        },
        { 
          name: "Medicaid Diagnostics", 
          location: "Wuse II, Abuja", 
          image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80" 
        }
      ]
    },
    {
      title: "Pharmacies & Medical Suppliers",
      description: "Reliable pharmacy networks ensuring consistent access to essential maintenance medications, pain management, and nutritional support.",
      partners: [
        { 
          name: "Alpha Pharmacy & Stores", 
          location: "Garki & Wuse, Abuja", 
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" 
        },
        { 
          name: "H-Medix Pharmacy", 
          location: "Gwarimpa & Wuse II, Abuja", 
          image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80" 
        }
      ]
    }
  ];

  return (
    <div className="w-full text-[#0D1B2A] pb-16">
      {/* Hero Banner */}
      <div 
        className="relative w-full h-80 md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            Partners & Network Hospitals
          </h1>
        </div>
      </div>

      {/* Main Content & Description */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] leading-snug">
              Collaborating for <br />Better Warrior Care
            </h2>
          </div>
          <div>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">
              Our network across Abuja and Keffi includes top-tier teaching hospitals, specialized clinics, diagnostic laboratories, and pharmacies dedicated to supporting sickle cell warriors.
            </p>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              If your institution would like to join our referral and support network, contact us at <a href="mailto:contact@stopsicklecelldisease.org" className="text-red-600 font-semibold hover:underline">contact@stopsicklecelldisease.org</a> or call <a href="tel:+19027897763" className="text-red-600 font-semibold hover:underline">(902) 789-7763</a>.
            </p>
          </div>
        </div>

        {/* Categories Grid Loop */}
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
                          Verified Partner Network
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
            Are You a Healthcare Provider?
          </h3>
          <p className="text-slate-700 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Partner with SCPAF to streamline patient care pathways, coordinate treatment support, and expand community outreach across the FCT and Nasarawa State.
          </p>
          <a 
            href="mailto:contact@stopsicklecelldisease.org"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg shadow transition text-base"
          >
            Partner With Us
          </a>
        </div>

      </div>
    </div>
  );
}