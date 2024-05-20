import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-container" data-aos="fade-up">
          <div className="container">
            <span className="contact-title">Leave a Messege</span>
            <Form />
          </div>
          <div>
            <span className="contact-title">Get in Touch</span>
            <p className="contact-text">
              <i className="fas fa-map-marker-alt"></i> Location: Jaipur,
              Rajasthan <br />
              <br />
              <i className="fas fa-phone-alt"></i> Phone:{" "}
              <a href="tel:9116511522"> +91 9116511522</a> <br />
              <br />
              <i className="fas fa-envelope"></i> Email:{" "}
              <a href="mailto:tajendrabatra@gmail.com">
                {" "}
                tajendrabatra@gmail.com{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
