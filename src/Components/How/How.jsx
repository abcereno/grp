import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Process from '../Process/Process'
import Carousels from '../Carousel/Carousels'
import "./How.css"
const How = () => {
  return (
    <section  className='py-5'>
      <Process />
      <Carousels />
      <Container>
        <h1>What is included in the service</h1>
        <h6>Fixing your credit is our goal. We will work hard to correct, update or remove the following inaccurate, misleading and unverifiable items listed below:</h6>
        <Row className='py-5'>
          <Col md={4} xs={12}>
            <ul className='check'>
              <li>Late pays</li>
              <li>Tax liens</li>
              <li>Inquiries</li>
              <li>Short sales</li>
              <li>Collection accounts</li>
              <li>Identity Theft</li>
            </ul>
          </Col>
          <Col md={4} xs={12}>
            <ul className='check'>
              <li>Charge offs</li>
              <li>Account sold</li>
              <li>Authorized users</li>
              <li>Bankruptcies</li>
              <li>Outdated</li>
            </ul>
          </Col>
          <Col md={4} xs={12}>
            <ul className='check'>
              <li>Medical bills</li>
              <li>Repossessions</li>
              <li>Foreclosures</li>
              <li>Duplicates</li>
              <li>Child support</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default How