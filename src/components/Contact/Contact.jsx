import React from "react";
import { Button } from "react-bootstrap";
import Cv from "../../cv/Thomas Chalanson Cv.pdf";
import Networks from "../Networks";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <footer className="contact-container">
        <div className="cv">
          <Button variant="light" className="btnCv">
            <a className="cv-btn" href={Cv} download={Cv}>
              téléchargez mon Cv
            </a>
          </Button>
          {/* <button className="button"></button> */}
        </div>
        <div className="contact">
          Des questions, envoyez moi un email à : thomas.chalanson@gmail.com -
          tel : 0663802804
        </div>
        <Networks />
      </footer>
    </>
  );
};

export default Contact;
