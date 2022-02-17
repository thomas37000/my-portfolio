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
import ReactSelect from "../Buttons/ReactSelect";
import "./Project.css";

const ProjetsPerso = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);
  const [projects, setProjects] = useState([]);
  const [all, setAll] = useState([]);

  // new Set ne map pas les technos en doublons ou plus
  const allTechnos = [
    "All",
    ...new Set(projects.map((project) => project.technos)),
  ];

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.perso);
        setAll(data.perso);
        setSelectedOption(data.perso);
      });
  }, []);

  const options =
    projects &&
    projects.map((project) => {
      return {
        value: project.id,
        label: project.technos,
      };
    });

  //Filter Function
  const filter = (button, selectedOption) => {
    if (button === "All" || selectedOption === "All") {
      setProjects(all);
      setSelectedOption("All");
      return;
    }

    const filteredData = projects.filter(
      (project) => project.technos === button
    );

    const selectData = projects.filter(
      (project) => project.technos === selectedOption
    );

    setProjects(filteredData);
    setSelectedOption(selectData);
  };

  return (
    <>
      <section>
        <div className="header-projets">
          <div className="hr">transparent</div>
          <h2>Mes travaux personnels</h2>
          <div>Voici différents projets que j' ai réalisés dernièrement</div>
          <div className="filter">
            Filtrez les projets par technos :
            <ReactSelect
              filter={filter}
              options={options}
              selectedOption={selectedOption}
            />
            <Buttons button={allTechnos} filter={filter} />
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
