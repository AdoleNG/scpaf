import React from "react";

export default function BecomeSponsor() {
  return (
    <div className="w-full text-[#0D1B2A] pb-16">
      {/* Hero Banner matching your example layout */}
      <div 
        className="relative w-full h-80 md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            Sponsorships
          </h1>
        </div>
      </div>

      {/* Main Content & Description */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] leading-snug">
              Sponsorship <br />Opportunities
            </h2>
          </div>
          <div>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">
              It takes someone with a very big heart to reach into their pocket and give to people they've never met. We thank you for everything you have done in the past, all that you are still doing, and all that you will continue to do.
            </p>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              If you would like to become an event sponsor, please contact us at <a href="mailto:contact@stopsicklecelldisease.org" className="text-red-600 font-semibold hover:underline">contact@stopsicklecelldisease.org</a> or <a href="tel:+1 (902)7897763" className="text-red-600 font-semibold hover:underline">(902) 789-7763</a> for more information.
            </p>
          </div>
        </div>

        {/* Sponsorship Program Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-[#0D1B2A] mb-8">
            Event & Program Sponsorship Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* CARD 1 — Medical Support */}
            <div className="bg-[#0D1B2A] text-white rounded-lg shadow-md border border-[#0D1B2A] p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Medical Support
                </span>
                <h4 className="font-bold text-xl mb-2">Hydroxyurea Access & Hospital Partnerships</h4>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">
                  Sponsor prescription subsidies and partner hospital programs helping patients access life-saving treatments at institutions like Federal Medical Center Keffi and General Hospital Nasarawa.
                </p>
              </div>
              <a href="mailto:sponsorships@scpaf.com" className="text-sm font-semibold text-red-300 hover:underline">
                Contact to sponsor &rarr;
              </a>
            </div>

            {/* CARD 2 — Awareness Campaigns */}
            <div className="bg-[#0D1B2A] text-white rounded-lg shadow-md border border-[#0D1B2A] p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Awareness Campaigns
                </span>
                <h4 className="font-bold text-xl mb-2">Community Outreach & Media Programs</h4>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">
                  Support our public awareness initiatives, school workshops, and educational radio/TV drama series designed to promote genotype testing before marriage.
                </p>
              </div>
              <a href="mailto:Sponsorships@scpa" className="text-sm font-semibold text-red-300 hover:underline">
                Contact to sponsor &rarr;
              </a>
            </div>

            {/* CARD 3 — Family Care Initiatives */}
            <div className="bg-[#0D1B2A] text-white rounded-lg shadow-md border border-[#0D1B2A] p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Family Care Initiatives
                </span>
                <h4 className="font-bold text-xl mb-2">BabySteps & BrothersKeepers</h4>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">
                  Back our early childhood parenting education (Ages 0-8) and crisis support network initiatives that ensure no warrior fights alone.
                </p>
              </div>
              <a href="mailto:Victor.Ameh@primerica.com" className="text-sm font-semibold text-red-300 hover:underline">
                Contact to sponsor &rarr;
              </a>
            </div>

          </div>
        </div>

        {/* Closing Thank You Banner */}
        <div className="text-center pt-8 border-t border-slate-200">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-800">
            Thank you to our current and past sponsors.
          </h3>
        </div>

      </div>
    </div>
  );
}
