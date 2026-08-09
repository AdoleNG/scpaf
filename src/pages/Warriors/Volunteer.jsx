import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient"; // Adjust this import path if your supabase client is located elsewhere

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredArea: "Community Outreach (Drama, School Workshops, etc.)",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("volunteer_registrations")
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            preferred_area: formData.preferredArea,
            motivation: formData.motivation,
          },
        ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error("Error saving volunteer registration:", err);
      alert("Failed to submit registration. Please check your console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full text-[#0D1B2A] pb-16">
      {/* Hero Banner */}
      <div className="relative w-full h-80 md:h-96 bg-slate-900 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/images/brotherskeepersimage.png')` }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Join Our Volunteer Family
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto drop-shadow">
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">
            Ways You Can Make a Difference
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Whether you love public speaking, prefer hands-on bedside companionship, or excel behind a computer screen, there is a special place for you on our team. Explore our three main volunteer pathways below and find where you fit best.
          </p>
        </div>

        {/* 3 Main Volunteer Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Area 1: Community Outreach */}
          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=80" 
                alt="Community outreach and drama" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Outreach & Advocacy
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0D1B2A]">Community Outreach Volunteers</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Help us break the stigma and educate the public. Community outreach volunteers take part in impactful awareness campaigns—including acting in radio and TV drama series—and participate in educational workshops in schools and local communities to encourage proactive genotype testing.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a 
                href="#contact-form" 
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                Sign up for Outreach &rarr;
              </a>
            </div>
          </div>

          {/* Area 2: Care Companions (Volunteer Visitors) */}
          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" 
                alt="Care Companion visiting hospital" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Hospital Support
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0D1B2A]">Care Companions (Hospital Visitors)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Pain crises can be deeply isolating. Care Companions offer their valuable time to visit warriors who are sick in the hospital. Your role is to provide comforting companionship, a listening ear, and emotional reassurance during their hardest moments.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a 
                href="#contact-form" 
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                Sign up as a Care Companion &rarr;
              </a>
            </div>
          </div>

          {/* Area 3: Digital & Media Volunteers */}
          <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                alt="Digital and media team collaborating" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  Digital Presence
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0D1B2A]">Digital & Media Volunteers</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Help amplify our voice online. Digital and media volunteers assist in managing our social media platforms, creating engaging digital content, designing campaigns, and sharing stories of resilience to reach wider audiences digitally.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a 
                href="#contact-form" 
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                Sign up for Digital & Media &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Call to Action / Volunteer Sign-Up Section */}
        <div id="contact-form" className="bg-[#E6E9EF] border border-slate-300 rounded-xl p-8 md:p-12 max-w-4xl mx-auto shadow-sm">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-2">Ready to Lend a Hand?</h3>
                <p className="text-slate-700">
                  Fill out our brief expression of interest form, and our team will get in touch with you shortly.
                </p>
              </div>

              <form className="space-y-4 max-w-2xl mx-auto" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none bg-white" 
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none bg-white" 
                      placeholder="your.email@example.com" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none bg-white" 
                      placeholder="(902) 000-0000" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Volunteer Area</label>
                    <select 
                      name="preferredArea"
                      value={formData.preferredArea}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none bg-white"
                    >
                      <option>Community Outreach (Drama, School Workshops, etc.)</option>
                      <option>Care Companion (Hospital Visitor / Support)</option>
                      <option>Digital & Media Volunteer</option>
                      <option>General / Any Area</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Why do you want to volunteer with SCPAF?</label>
                  <textarea 
                    rows="4" 
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none bg-white" 
                    placeholder="Tell us a little bit about yourself..."
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md shadow transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="bg-[#0B192C] text-white rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-md">
                ✓
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Registration Received Successfully!
              </h3>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                Thank you for reaching out, <strong className="text-white">{formData.fullName}</strong>. Our team will review your application and get in touch with you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    preferredArea: "Community Outreach (Drama, School Workshops, etc.)",
                    motivation: "",
                  });
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md shadow transition"
              >
                Register Another Request
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}