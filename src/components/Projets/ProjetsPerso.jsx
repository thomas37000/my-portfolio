import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { api } from "../../api/api";
import CardProject from "../Card/CardProject";
import ProjetsWild from "./ProjetsWild";
import "./Project.css";

const ProjetsPerso = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data.perso);
      });
  }, []);

  // const fetchJsonProjects =
  //   projects &&
  //   projects.map((project, index) => {
  //     return <CardProject key={project.id} {...project} />;
  //   });

  const current = new Date();
  const today = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  console.log(today);

  return (
    <>
      <section>
        <div className="header-projets">
          <h2>Mes travaux personnels</h2>
          <div>Voici différents projets que j' ai réalisé dernièrement</div>
        </div>

        <div className="projets">
          {" "}
          <VerticalTimeline>
            {projects &&
              projects.map((event) => (
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
