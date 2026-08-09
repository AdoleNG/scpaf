// src/router/AppRouter.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

/* About */
import AboutUs from "../pages/About/AboutUs";
import OurBoard from "../pages/About/OurBoard";
import OurStaff from "../pages/About/OurStaff";
import PressReleases from "../pages/About/PressReleases";
import WhatIsSCD from "../pages/About/WhatIsSCD";

/* Warriors & Caregivers */
import CHWSupport from "../pages/Warriors/CHWSupport";
import Programs from "../pages/Warriors/Programs";
import Resources from "../pages/Warriors/Resources";
import Clinics from "../pages/Warriors/Clinics";
import Volunteer from "../pages/Warriors/Volunteer";
import WarriorsCaregivers from "../pages/Warriors/WarriorsCaregivers";
import WarriorRegistration from "../pages/Warriors/WarriorRegistration";

/* Sponsors & Supporters */
import BecomeSponsor from "../pages/Sponsors/BecomeSponsor";
import Donate from "../pages/Sponsors/Donate";

/* Utility */
import Contact from "../pages/Utility/Contact";
import EventsCalendar from "../pages/Utility/EventsCalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      // About SCDF
      { path: "about/about-us", element: <AboutUs /> },
      { path: "about/our-board", element: <OurBoard /> },
      { path: "about/our-staff", element: <OurStaff /> },
      { path: "about/press-releases", element: <PressReleases /> },
      { path: "about/what-is-scd", element: <WhatIsSCD /> },

      // Warriors & Caregivers
      { path: "warriors/chw-support", element: <CHWSupport /> },
      { path: "warriors/programs", element: <Programs /> },
      { path: "warriors/resources", element: <Resources /> },
      { path: "warriors/clinics", element: <Clinics /> },
      { path: "warriors/volunteer", element: <Volunteer /> },
      { path: "warriors/warriors-caregivers", element: <WarriorsCaregivers /> },
      { path: "warriors/register", element: <WarriorRegistration /> },

      // Sponsors & Supporters
      { path: "sponsors/become-a-sponsor", element: <BecomeSponsor /> },
      { path: "sponsors/donate", element: <Donate /> },

      // Utility
      { path: "contact", element: <Contact /> },
      { path: "events", element: <EventsCalendar /> },
    ],
  },
]);

export default router;