import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Donate() {
  const [frequency, setFrequency] = useState("monthly"); // 'monthly' or 'onetime'
  const [selectedAmount, setSelectedAmount] = useState("50");
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = ["25", "50", "100", "250", "500"];

  const handlePresetClick = (amount) => {
    setIsCustom(false);
    setSelectedAmount(amount);
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setSelectedAmount(customAmount || "");
  };

  const handleCustomChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    setSelectedAmount(val);
  };

  const finalAmount = isCustom ? customAmount : selectedAmount;

  return (
    <div className="w-full text-[#0D1B2A] pb-16">
      {/* Hero Section */}
      <div 
        className="relative w-full h-80 md:h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            Support SCPAF
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        
        {/* Intro Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] leading-snug">
              You Are The Difference
            </h2>
          </div>
          <div>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
              For far too many, on too many days to count, you are THE DIFFERENCE. The difference between a painful existence and a hopeful life... you're the difference.
            </p>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              What you do and all that you give makes the difference in our ability to service those countless individuals who live daily with Sickle Cell Disease.
            </p>
          </div>
        </div>

        {/* Giving Frequency Selector (Monthly vs One-Time) & Amount Picker */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-md p-8 md:p-12 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-3">Choose Your Giving Level</h3>
            
            {/* Frequency Toggle Buttons */}
            <div className="inline-flex rounded-lg border border-slate-300 p-1 bg-slate-100">
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition ${
                  frequency === "monthly" 
                    ? "bg-red-600 text-white shadow" 
                    : "text-slate-700 hover:text-black"
                }`}
              >
                Monthly Giving
              </button>
              <button
                type="button"
                onClick={() => setFrequency("onetime")}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition ${
                  frequency === "onetime" 
                    ? "bg-red-600 text-white shadow" 
                    : "text-slate-700 hover:text-black"
                }`}
              >
                One-Time Giving
              </button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-700 mb-3 text-center">
              Select {frequency === "monthly" ? "Monthly" : "One-Time"} Donation Amount ($)
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handlePresetClick(amount)}
                  className={`py-3 rounded-lg font-bold border transition text-lg ${
                    !isCustom && selectedAmount === amount
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  ${amount}
                </button>
              ))}
              
              {/* Custom Amount Button */}
              <button
                type="button"
                onClick={handleCustomClick}
                className={`py-3 rounded-lg font-bold border transition text-sm md:text-base ${
                  isCustom
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                Custom
              </button>
            </div>

            {/* Custom Amount Input Field (Shows when Custom is selected) */}
            {isCustom && (
              <div className="mt-4 max-w-xs mx-auto">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 font-bold">
                    $
                  </div>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="block w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-lg font-semibold"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <button 
              type="button" 
              onClick={() => alert(`Thank you for choosing a ${frequency} gift of $${finalAmount || 0}! Payment gateway integration goes here.`)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow transition text-lg"
            >
              Donate ${finalAmount || "0"} {frequency === "monthly" ? "Monthly" : ""} Now
            </button>
          </div>
        </div>

        {/* 3 Donation Path Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-100 rounded-lg border border-slate-200 p-8 text-center flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="font-bold text-xl text-[#0D1B2A] mb-4">Make a general donation</h4>
              <p className="text-slate-600 text-sm mb-6">
                Support our core operations and allow us to direct funds where they are needed most urgently.
              </p>
            </div>
            <div>
              <a href="#top" className="inline-block bg-[#20818B] hover:bg-[#18666f] text-white font-semibold px-6 py-2.5 rounded transition text-sm">
                DONATE
              </a>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg border border-slate-200 p-8 text-center flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="font-bold text-xl text-[#0D1B2A] mb-4">Sponsor an event</h4>
              <p className="text-slate-600 text-sm mb-6">
                Partner with us for community workshops, awareness campaigns, and major annual programs.
              </p>
            </div>
            <div>
              <Link to="/sponsors/become-a-sponsor" className="inline-block bg-[#20818B] hover:bg-[#18666f] text-white font-semibold px-6 py-2.5 rounded transition text-sm">
                DONATE
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Contact Footer Banner */}
        <div className="bg-slate-100 border border-slate-300 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row items-center">
          <div className="bg-[#8C2532] text-white w-full md:w-1/3 p-8 flex items-center justify-center text-center">
            <h3 className="text-xl md:text-2xl font-bold">
              Volunteer with SCPAF
            </h3>
          </div>
          <div className="w-full md:w-2/3 p-8 text-center md:text-left">
            <p className="text-slate-700 mb-2">Have questions or prefer to give offline?</p>
            <p className="text-xl md:text-2xl font-bold text-[#20818B]">
              Call us at <a href="tel:9027897763" className="hover:underline">(902) 789-7763</a>
            </p>
            <p className="text-sm text-slate-600 mt-2">
              Email inquiries: <a href="mailto:Victor.Ameh@primerica.com" className="text-red-600 font-semibold hover:underline">Victor.Ameh@primerica.com</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}