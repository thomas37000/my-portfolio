/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { api } from "../../api/api";
import CardProject from "../Card/CardProject";
import ProjetsWild from "./ProjetsWild";
import Buttons from "../Buttons/Buttons";
import "./Project.css";

const ProjetsPerso = () => {
  const [projects, setProjects] = useState([]);
  console.log("api", projects);

  // new Set ne map pas les technos en doublons ou plus
  const allTechnos = [
    "All",
    ...new Set(projects.map((project) => project.technos)),
  ];
  console.log("buttons", allTechnos);

  const [buttons, setButtons] = useState(allTechnos);
  console.log("Hook buttons", buttons);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.perso);
      });
  }, []);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      const all = setProjects(projects);
      console.log("onClick All", all);
      return;
    }

    // il ne trouve pas le button === All ?
    const btnALL = button === "All";
    const btnReact = button === "React";
    const btnTs = button === "Typescript";
    const btnJs = button === "Javascript";
    console.log("find Buttons", btnALL, btnReact, btnTs, btnJs);

    const filteredData = projects.filter(
      (project) => project.technos === button
    );

    setProjects(filteredData);
  };

  return (
    <>
      <section>
        <div className="header-projets">
          <div className="hr">transparent</div>
          <h2>Mes travaux personnels</h2>
          <div>Voici différents projets que j' ai réalisés dernièrement</div>
          <Buttons button={allTechnos} filter={filter} />
        </div>

        <div className="projets">
          {" "}
          <VerticalTimeline>
            {projects &&
              projects.map((event, id) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date={event.date}
                  iconStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  icon={
                    <img
                      src={event.icon}
                      className="time-icon"
                      alt={event.techno}
                    />
                  }
                  key={id}
                >
                  <CardProject key={event.id} {...event} />
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </div>
      </section>
      <ProjetsWild />
    </>
  );
};

export default ProjetsPerso;
