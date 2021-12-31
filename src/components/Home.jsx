import React from "react";
import Description from "./description/Description";
import ProjetsPerso from "./Projets/ProjetsPerso";
import Mount from "./animation/Mount";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <Description />
      <Mount />
      <ProjetsPerso />
      <Contact />
    </div>
  );
};

