import React from "react";

export default function CHWSupport() {
  return (
    <div className="w-full text-[#0D1B2A] pb-16">
      {/* Hero Banner */}
      <div 
        className="relative w-full h-80 md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Community Health Worker (CHW) Support
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto drop-shadow">
            Bridging the gap between clinical care and community living to ensure every warrior receives trusted, compassionate, and personalized guidance.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">
              Who Are Community Health Workers?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Community Health Workers (CHWs) are trusted frontline public health workers who have a close understanding of the community they serve. For individuals and families managing Sickle Cell Disease (SCD), CHWs act as a vital lifeline—translating medical instructions, navigating hospital networks, and offering continuous, empathetic support.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Living with Sickle Cell Disease involves navigating complex physical and emotional hurdles. Our CHWs walk side-by-side with warriors to make sure no one has to face their health journey in isolation.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
              alt="Community health worker supporting a patient" 
              className="rounded-lg shadow-md w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* How CHWs Support Warriors (Updated with deep blue branding cards) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-[#0D1B2A] mb-8">
            How CHWs Support Sickle Cell Warriors
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#121B35] rounded-xl shadow-lg p-8 text-white flex flex-col justify-between border border-slate-800">
              <div>
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded mb-4">
                  Medical Navigation
                </span>
                <h4 className="font-bold text-xl mb-3 text-white">Care Coordination & Clinic Access</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  CHWs assist warriors in scheduling appointments, coordinating visits with partner clinics, and ensuring prescription adherence for treatments like Hydroxyurea.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#121B35] rounded-xl shadow-lg p-8 text-white flex flex-col justify-between border border-slate-800">
              <div>
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded mb-4">
                  Education & Prevention
                </span>
                <h4 className="font-bold text-xl mb-3 text-white">SCD Education & Management</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  They provide families with practical tools on pain crisis management, hydration tracking, trigger identification, and early childhood care guidance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121B35] rounded-xl shadow-lg p-8 text-white flex flex-col justify-between border border-slate-800">
              <div>
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded mb-4">
                  Advocacy & Well-being
                </span>
                <h4 className="font-bold text-xl mb-3 text-white">Emotional Support & Advocacy</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  By offering a listening ear, fighting against health stigmas, and connecting warriors to peer support networks, CHWs champion holistic well-being.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-[#E6E9EF] border border-slate-300 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-[#0D1B2A] mb-3">Need Guidance or Support?</h3>
          <p className="text-slate-700 max-w-xl mx-auto mb-6">
            Our community health team is here to assist you or your family. Reach out to connect with a dedicated CHW.
          </p>
          <div className="text-lg font-semibold text-slate-800">
            Contact us at <span className="text-red-600">(902) 789-7763</span> or email <span className="text-red-600">Victor.Ameh@primerica.com</span>
          </div>
        </div>

      </div>
    </div>
  );
}