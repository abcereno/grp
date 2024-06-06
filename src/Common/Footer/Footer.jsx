import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import "./Footer.css";
import logo from "../../Common/Images/grp.png";
import { Link } from 'react-router-dom';
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: smooth scrolling effect
    });
  };

  return (
    <Row className='bg-main g-0 footer py-5 footer-custom'>
      <Container>
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
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/how" onClick={scrollToTop}>How It Works</Link></li>
              <li><Link to="/Pricing" onClick={scrollToTop}>Pricing</Link></li>
              <li><Link to="/freqasked" onClick={scrollToTop}>FAQs</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <b><h5>Company</h5></b>
            <ul className='list-unstyled'>
              <li><Link to="/terms" onClick={scrollToTop}>Terms & Conditions</Link></li>
              <li><Link to="/policy" onClick={scrollToTop}>Privacy Policy</Link></li>
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
        <h6>Copyright © 2024. All Rights Reserved</h6>
      </div>
    </Row>
  )
}

export default Footer