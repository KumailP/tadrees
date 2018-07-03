import React from "react";
import AboutTadrees from "../components/Home/AboutTadrees";
import HeroImage from "../components/Home/HeroImage";
import Community from "../components/Home/Community";
import Volunteer from "../components/Home/Volunteer";
import Founder from "../components/Home/Founder";
import Stats from "../components/Home/Stats";

export default function Home() {
  return (
    <React.Fragment>
      <HeroImage />
      <AboutTadrees />
      <Community />
      <Volunteer />
      <Founder />
      <Stats />
    </React.Fragment>
  );
}
