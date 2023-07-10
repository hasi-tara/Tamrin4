import React from "react";
import Form from "./Form";

function ContactUs() {
  return (
    <div className="contact">
      <div>
        <h1>Get in Touch</h1>
        <p>
          Fill in the form with your questions, comments and concerns, and we
          will get right back to you.
        </p>
        <h2>Other ways to reach us</h2>
        <p>Wholesale enquiries:</p>
        <a href="mailto: info@mysite.com">info@mysite.com</a>
        <p>PR, press or partnerships:</p>
        <a href="mailto: info@mysite.com">info@mysite.com</a>
        <p>Address:</p>
        <p> 500 Terry Francine St. San Francisco,CA 94158</p>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default ContactUs;
