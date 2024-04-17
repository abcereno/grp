import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import "./Footer.css";
import axios from 'axios'
import logo from "../../Common/Images/grp.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const [email, setEmail] = useState(''); // Initial email state

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("/grp/newsletter", { email });
      setEmail('');
      console.log("Form submission response:", response.data);
      // Handle successful submission (e.g., clear form, show success message)
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle errors (e.g., display error message to user)
    }
  }
  return (
    <Row className='bg-main g-0 footer p-5 footer-custom'>
      <Container>
        <div className="row text-center pt-4 d-flex justify-content-between">
          <div>
            <div className=" bg-transparent">
              <div>
                <h5 className="text-warning fw-lighter fs-5 my-0">Want to know about our offers first?</h5>
                <h2 className="text-light">Subscribe our newsletter</h2>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-transparent">
              <form className="input-group pt-3 mx-auto" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  aria-label="email"
                  aria-describedby="button-addon2"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button className="btn btn-outline-warning w-50" type="submit" id="button-addon2">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
        <Row className="d-flex justify-content-center mt-5">
          <Col xs={12} md={3}>
            <img className='img-fluid' src={logo} alt="LT outsourcing solutions" />
            <h4 className="text-center">Follow Us:</h4>
            <ul className="socials list-unstyled d-flex justify-content-center gap-3 mt-3">
              <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
              <li><i className="fa-brands fa-twitter"></i></li>
              <li><i className="fa-brands fa-instagram"></i></li>
              <li><i className="fa-brands fa-tiktok"></i></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <b><h5>Links</h5></b>
            <ul className='list-unstyled'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/how">How It Works</Link></li>
              <li><Link to="/Pricing">Pricing</Link></li>
              <li><Link to="/freqasked">FAQs</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <b><h5>Company</h5></b>
            <ul className='list-unstyled'>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/policy">Privacy Policy</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <b><h5>Get in touch</h5></b>
            <ul className='list-unstyled'>
              <li>240-770-2144</li>
              <li>Every | Mon-Fri</li>
              <li>10:00am - 1:00pm EST</li>
              <li>info@grpenterprise.com</li>
              <li>support@grpenterprise.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="d-flex justify-content-around flex-wrap p-3">
        <h6>Copyright © 2024. All Rights Reserved. Lt Student Credit Solutions</h6>
      </div>
    </Row>
  )
}

export default Footer