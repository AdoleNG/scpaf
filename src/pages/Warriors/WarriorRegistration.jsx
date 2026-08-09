import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function WarriorRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    hospital: "",
    primaryConcern: "",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("warrior_registrations").insert([
        {
          full_name: formData.fullName,
          age: parseInt(formData.age, 10),
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          hospital: formData.hospital,
          primary_concern: formData.primaryConcern,
          additional_notes: formData.additionalNotes,
        },
      ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving registration:", error.message);
      alert("Failed to submit registration. Please check your console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-[#0D1B2A] pb-16">
      {/* Hero Banner with Left-Aligned Text */}
      <div 
        className="relative w-full h-80 md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/images/registerimage.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-15">
          <div className="max-w-xl text-left">
            <span className="inline-block bg-red-600 text-white text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full mb-3 shadow">
              Warrior Support Program
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-md leading-tight">
              You Are Never Alone in This Journey
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content & Form Section */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-3">
            Warrior Registration & Assistance Form
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Please fill out the details below so our support team can reach out to you with personalized care coordination, education, and resources.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#121B35] text-white rounded-xl p-8 md:p-12 text-center shadow-xl">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold mb-2">Registration Received Successfully!</h3>
            <p className="text-slate-300 max-w-lg mx-auto mb-6">
              Thank you for reaching out, <span className="font-semibold text-white">{formData.fullName}</span>. A Community Health Worker will review your information and get in touch with you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  age: "",
                  phone: "",
                  email: "",
                  address: "",
                  hospital: "",
                  primaryConcern: "",
                  additionalNotes: "",
                });
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg transition"
            >
              Register Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 md:p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name / Warrior Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g., Jane Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Age <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g., 24"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., (902) 000-0000"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., email@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Primary Hospital / Clinic <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="hospital"
                required
                value={formData.hospital}
                onChange={handleChange}
                placeholder="e.g., Federal Medical Center Keffi"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Residential Address / Location
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="City, State or Region"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Primary Type of Support Needed <span className="text-red-600">*</span>
              </label>
              <select
                name="primaryConcern"
                required
                value={formData.primaryConcern}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none bg-white"
              >
                <option value="">Select an option...</option>
                <option value="Care Coordination & Navigation">Care Coordination & Clinic Navigation</option>
                <option value="Pain Crisis & Hydration Guidance">Pain Crisis Management & Education</option>
                <option value="Medication & Treatment Support">Medication & Treatment Support (e.g., Hydroxyurea)</option>
                <option value="Peer & Emotional Support">Peer Support & Counseling</option>
                <option value="General Inquiry">General Assistance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Additional Notes or Specific Requests
              </label>
              <textarea
                name="additionalNotes"
                rows="4"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Share any specific details that will help our team assist you better..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#121B35] hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-lg transition duration-200 shadow-md text-lg disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Warrior Registration"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}