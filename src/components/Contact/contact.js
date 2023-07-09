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
          <span className="detail-label">Telefon:</span> 0763221114
        </p>
        <p className="contact-detail">
          <span className="detail-label">Email:</span> hutanudaniel77@yahoo.com
        </p>
        <p className="contact-detail">
          <span className="detail-label">Adresă:</span> Strada Libertatii, Nr. 123, Orașul Iasi
        </p>
      </div>
    </div>
    </div>
  );
}

export default Contact;
