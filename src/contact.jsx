import React, { useState } from "react";
import "./contact.css";


import logo from "./logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";


function contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>GET IN TOUCH</h1>
        <img src={logo} alt="imageof" style={{ width: "300px" }} />
      </div>
      <div className="contact-section">
        <div className="contact-lift">
          <h1>Let’s talk</h1>
          <p>
          We welcome your inquiries and are ready to assist with your projects or questions. Please feel free to reach out via email, phone, or by using the contact form below.


          </p>
          <div className="contact-details">
            <div className="contact-detail">
            <MdAlternateEmail />
              <p>sebghatullahradmanish7@gmail.com</p>
            </div>
            <div className="contact-detail">
            <IoCallOutline />
              <p>009379000000</p>
            </div>
            <div className="contact-detail">
            <CiLocationOn />
              <p>Afghanistan Herat</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Your Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            className="contact-submit"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default contact;
