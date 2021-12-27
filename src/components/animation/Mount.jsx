import React, { useState, useEffect } from "react";
import { animated, useTransition, useSpring } from "react-spring";
import { api } from "../../api/api";
import { CardTools } from "../Card/CardSkills";
import Description from "../description/Description";
import "./Spring.css";

export default function Mount() {
  const [back, setBack] = useState([]);
  const [front, setFront] = useState([]);
  const [show, setShow] = useState(false);
  const [greetingStatus, displayGreeting] = useState(false);

  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 1,
    marginTop: greetingStatus ? 0 : 50,
  });

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setFront(data.frontend);
        setBack(data.backend);
      });
  }, []);

  const fetchJsonToolsFrontend =
    front &&
    front.map((tool) => {
      return <CardTools key={tool.id} {...tool} />;
    });

  const fetchJsonToolsBackend =
    back &&
    back.map((tool) => {
      return <CardTools key={tool.id} {...tool} />;
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
      <Description />
      <div className="mount-container">
        <div>click me {"->"} </div>
        <button
          className="mount"
          onClick={() => {
            setShow((v) => !v);
          }}
        >
          {show ? "mes compétences Backend" : "mes compétences Frontend"}
        </button>
      </div>
      <div className="items-container">
        {transition((style, item) =>
          item ? (
            <animated.div style={style} className="item">
              {" "}
              {fetchJsonToolsFrontend}
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>

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
          {fetchJsonToolsFrontend}
        </animated.div>
      ) : (
        <animated.div className="box" style={contentProps}>
          {fetchJsonToolsBackend}
        </animated.div>
      )}
    </div>
  );
}
