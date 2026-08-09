import React from "react";
import { Link } from "react-router-dom";

export default function WarriorsCaregivers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-[#0D1B2A]">
      <h1 className="text-3xl font-bold mb-4">Warriors & Caregivers Overview</h1>
      <p className="text-lg text-slate-700 mb-8">
        Welcome to the Warriors & Caregivers hub. Explore our support services, resources, and community programs designed to empower you.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border border-slate-200">
          <h3 className="font-semibold text-xl mb-2">CHW Support</h3>
          <p className="text-slate-600 mb-4">Connect with Community Health Workers for personalized guidance.</p>
          <Link to="/warriors/chw-support" className="text-red-600 font-medium hover:underline">Learn More &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-slate-200">
          <h3 className="font-semibold text-xl mb-2">Programs</h3>
          <p className="text-slate-600 mb-4">Discover educational and wellness programs tailored for warriors.</p>
          <Link to="/warriors/programs" className="text-red-600 font-medium hover:underline">View Programs &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-slate-200">
          <h3 className="font-semibold text-xl mb-2">Resources</h3>
          <p className="text-slate-600 mb-4">Access helpful toolkits, guides, and informative materials.</p>
          <Link to="/warriors/resources" className="text-red-600 font-medium hover:underline">Browse Resources &rarr;</Link>
        </div>
      </div>
    </div>
  );
}