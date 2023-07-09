import React from "react";
import { quiz } from "../../quiz";
import Quiz from "react-quiz-component";
import "./contact.css";

function Contact() {
  return (
    <div className="quiz">
    <div className="container">
      <h1 className="title">Contactează-ne</h1>
      <div className="contact-info">
        <p className="contact-detail">
          <span className="detail-label">Telefon:</span> 123-456-789
        </p>
        <p className="contact-detail">
          <span className="detail-label">Email:</span> contact@example.com
        </p>
        <p className="contact-detail">
          <span className="detail-label">Adresă:</span> Strada Exemplu, Nr. 123, Orașul Tau, 12345
        </p>
      </div>
    </div>
    </div>
  );
}

export default Contact;
