import React, { useState } from "react";
import { animated, useTransition, useSpring } from "react-spring";
import softSkills from "../../images/nuage-de-mots.webp";
import frontend from "../../images/frontend-nuage-de-mots.webp";
import backend from "../../images/backend-nuage-de-mots.webp";
import "./Spring.css";

export default function Mount() {
  const [show, setShow] = useState(false);
  const [greetingStatus, displayGreeting] = useState(false);

  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 1,
    marginTop: greetingStatus ? 0 : 50,
  });

  const transition = useTransition(show, {
    // from before
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    // after
    leave: { x: -100, y: 800, opacity: 0 },
  });

  return (
    <div>
      <div className="main-mount">
        <div className="mount-container">
          <div>click me {"->"} </div>
          <button
            className="mount"
            onClick={() => {
              setShow((v) => !v);
            }}
          >
            {show ? "mes Soft Skills" : "mes Soft Skills"}
          </button>
        </div>
        <div>
          {transition((style, item) =>
            item ? (
              <animated.div style={style}>
                <div className="card-skill">
                  <img
                    src={softSkills}
                    alt="mes soft skills"
                    className="soft-skills"
                  />
                </div>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
        {/* https://www.amalo-recrutement.fr/app/uploads/2020/01/soft-skills-scaled.jpg */}
        <div className="mount-container">
          <div>click me {"->"} </div>
          <button className="mount" onClick={() => displayGreeting((a) => !a)}>
            {greetingStatus
              ? "mes compétences Backend"
              : "mes compétences Frontend"}
          </button>{" "}
        </div>

        {!greetingStatus ? (
          <animated.div className="box" style={contentProps}>
            <div className="card-skill">
              <img
                src={frontend}
                alt="mes soft skills"
                className="soft-skills"
              />
            </div>
          </animated.div>
        ) : (
          <animated.div className="box" style={contentProps}>
            <div className="card-skill">
              <img
                src={backend}
                alt="mes soft skills"
                className="soft-skills"
              />
            </div>
          </animated.div>
        )}
      </div>
    </div>
  );
}
