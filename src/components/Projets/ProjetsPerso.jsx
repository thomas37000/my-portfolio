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
import ButtonsBackend from "../Buttons/ButtonsBackend";
import "./Project.css";

const ProjetsPerso = () => {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [projects, setProjects] = useState([]);
  const [all, setAll] = useState([]);

  // ---------------------------------------------------------------------------
  // new Set ne map pas les technos en doublons ou plus
  // ---------------------------------------------------------------------------
  const allTechnos = [
    "All",
    ...new Set(projects.map((project) => project.technos)),
  ];

  const allStacks = [...new Set(projects.map((project) => project.backend))];
  console.log("back", allStacks);
  const removeIndexBackend = allStacks.splice(1, 1);

  // ---------------------------------------------------------------------------
  // Filter Function
  // ---------------------------------------------------------------------------
  const filter = (button) => {
    if (button === "All") {
      setProjects(all);
      return;
    }

    const filteredData = projects.filter(
      (project) => project.technos === button
    );

    setProjects(filteredData);
  };

  const filterBackend = (button) => {
    if (button === "All") {
      setProjects(all);
      return;
    }

    const filteredData = projects.filter(
      (project) => project.backend === button
    );

    setProjects(filteredData);
  };

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.perso);
        setAll(data.perso);
      });
  }, []);

  return (
    <>
      <section>
        <div className="header-projets">
          <div className="hr">transparent</div>
          <h2>Mes travaux personnels</h2>
          <div>Voici différents projets que j' ai réalisés dernièrement</div>
          <div className="filter">
            Filtrez les projets par technos :
            <Buttons button={allTechnos} filter={filter} />
          </div>
          <div className="filter">
            Projets Backend :
            <ButtonsBackend button={allStacks} filter={filterBackend} />
          </div>
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
