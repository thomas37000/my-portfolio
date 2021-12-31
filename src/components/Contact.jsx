import React from "react";
import "../App.css";
import Cv from "../cv/Thomas Chalanson Cv.pdf";

const Contact = () => {
  return (
    <>
      <footer className="contact-container">
        <div className="cv">
          <button className="button">
            <a className="cv-btn" href={Cv} download={Cv}>
              téléchargez mon Cv
            </a>
          </button>
        </div>
        <div className="contact">
          Des questions, envoyez moi un email à : thomas.chalanson@gmail.com -
          tel : 0663802804
        </div>
      </footer>
    </>
  );
};

export default Contact;
