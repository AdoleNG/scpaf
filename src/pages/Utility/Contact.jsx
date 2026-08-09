import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="w-full text-[#0D1B2A] py-16 bg-slate-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-slate-600 text-lg">
            How can we help you today? Choose the option below that best describes you to find the right support and resources.
          </p>
        </div>

        {/* 3 Pathway Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: I am a Warrior */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-8 flex flex-col justify-between text-center hover:shadow-lg transition">
            <div>
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">I am a Warrior</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Register for personalized care coordination, education, resources, and community support tailored for warriors.
              </p>
            </div>
            <Link 
              to="/warriors/register" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow transition"
            >
              Warrior Registration &rarr;
            </Link>
          </div>

          {/* Card 2: I am a Caregiver */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-8 flex flex-col justify-between text-center hover:shadow-lg transition">
            <div>
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                ❤️
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">I am a Caregiver</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Access community health worker support, guidance, and assistance designed to help caregivers navigate SCD care.
              </p>
            </div>
            <Link 
              to="/warriors/chw-support" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow transition"
            >
              Caregiver Support &rarr;
            </Link>
          </div>

          {/* Card 3: Support Us */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-8 flex flex-col justify-between text-center hover:shadow-lg transition">
            <div>
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                🤝
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">Support Us</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Make a direct impact by donating or partnering with us to expand education, awareness, and relief efforts.
              </p>
            </div>
            <Link 
              to="/donate" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow transition"
            >
              Donate & Support &rarr;
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}