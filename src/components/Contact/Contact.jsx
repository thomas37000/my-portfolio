import React from 'react';
import { Button } from 'react-bootstrap';
import Cv from '../../cv/thomas-chalanson-cv.pdf';
import CvAlternance from '../../cv/thomas-chalanson-cv-alternance.pdf';
import Networks from '../Networks';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <footer className='contact-container'>
        <div className='cv'>
          <Button variant='light' className='btnCv'>
            <a className='cv-btn' href={Cv} download>
              téléchargez mon Cv
            </a>
          </Button>
        </div>

        <div className='cv'>
          <Button variant='light' className='btnCv'>
            <a className='cv-btn' href={CvAlternance} download>
              téléchargez mon Cv pour l' Alternance
            </a>
          </Button>
        </div>
        <div className='contact'>
          Des questions, envoyez moi un email à thomas.chalanson@gmail.com - tel
          : 0663802804
        </div>

        <Networks />
      </footer>
    </>
  );
};

export default Contact;
