import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

/* Home */
import Home from "./pages/Home";

/* About */
import AboutUs from "./pages/About/AboutUs";
import WhatIsSCD from "./pages/About/WhatIsSCD";

/* Warriors & Caregivers */
import CHWSupport from "./pages/Warriors/CHWSupport";
import Programs from "./pages/Warriors/Programs";
import Resources from "./pages/Warriors/Resources";
import Clinics from "./pages/Warriors/Clinics";
import Volunteer from "./pages/Warriors/Volunteer";
import WarriorsCaregivers from "./pages/Warriors/WarriorsCaregivers";

/* Sponsors & Supporters */
import BecomeSponsor from "./pages/Sponsors/BecomeSponsor";
import Donate from "./pages/Sponsors/Donate";

/* Utility */
import Contact from "./pages/Utility/Contact";
import EventsCalendar from "./pages/Utility/EventsCalendar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/about-us" element={<AboutUs />} />
          <Route path="/about/what-is-scd" element={<WhatIsSCD />} />

          {/* Warriors & Caregivers */}
          <Route path="/warriors/chw-support" element={<CHWSupport />} />
          <Route path="/warriors/programs" element={<Programs />} />
          <Route path="/warriors/resources" element={<Resources />} />
          <Route path="/warriors/clinics" element={<Clinics />} />
          <Route path="/warriors/volunteer" element={<Volunteer />} />
          <Route path="/warriors/warriors-caregivers" element={<WarriorsCaregivers />} />

          {/* Sponsors & Supporters */}
          <Route path="/sponsors/become-a-sponsor" element={<BecomeSponsor />} />
          <Route path="/sponsors/donate" element={<Donate />} />

          {/* Utility */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventsCalendar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}