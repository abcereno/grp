import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <Row className='footer-row' style={{background:"black"}}>
        <Col className='d-flex justify-content-center'>
          Copyright 2024
        </Col>
      </Row>
    </>
  )
}

export default Footer