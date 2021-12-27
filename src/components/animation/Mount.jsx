import React, { useState, useEffect } from "react";
import { animated, useTransition } from "react-spring";
import { Badge, Button, Card } from "react-bootstrap";
import { api } from "../../api/api";
import { CardSkills, CardTools } from "../Card/CardSkills";
import "./Spring.css";
import Description from "../description/Description";

export default function Mount() {
  const [items, setItems] = useState([]);
  const [front, setFront] = useState([]);
  console.log(items);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setFront(data.frontend);
      });
  }, []);

  const fetchJsonToolsFrontend =
    front &&
    front.map((tool) => {
      return <CardTools key={tool.id} {...tool} />;
    });

  const [show, setShow] = useState(false);

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
      <button
        className="mount"
        onClick={() => {
          setShow((v) => !v);
        }}
      >
        {show ? "mes compétences Frontend" : "mes compétences"}
      </button>

      <div className="items-container">
        {/* js normal */}
        {/* {show ? <div className='item'></div> : ''} */}

        {/* animation with spring  */}
        {transition((style, item) =>
          item ? <animated.div style={style} className="item" /> : ""
        )}
      </div>
    </div>
  );
}
