import React from 'react'
import "./CreditRepair.css"
import { Col, Row } from 'react-bootstrap'
import Buttons from '../../Common/Buttons/Buttons'
const CreditRepair = () => {
  return (
    <>
      <Col className='d-flex flex-column home-card py-5'>
        <h1 className='centered py-5'>Credit Repair Services:<br/>Challenge Errors & Improve Your Credit Score.</h1>
        <ul className='check px-md-5 pricing'>
          <li>Review your credit report for inaccurate items.</li>
          <li>Review of outdated accounts.</li>
          <li>Review your credit report for inaccurate personal information.</li>
          <li>Review accounts that can be made current.</li>
          <li>Review accounts with high credit utilization.</li>
          <li>Build a plan on how to fix information.</li>
          <li>Build a plan to raise and rebuild your credit score.</li>
          <li>Provide you with a detailed report of everything listed above.</li>
          <li>Analysis and review of your credit file status.</li>
          <li>Receiving and processing manual updates.</li>
          <li>Review credit report updates to determine next steps.</li>
          <li>Create a strategic plan to assist in meeting your goals.</li>
          <li>Create and send dispute letters to creditors.</li>
          <li>Assist with credit questions and process.</li>
          <li>Provide ongoing credit education and educational materials.</li>
        </ul>
        <Buttons />
      </Col>
      <Row className='g-0 py-5'>
        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <h1><strong>$250</strong></h1>
          <h2>Onboarding Fee</h2>
        </Col>
        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <h1><strong>$150</strong></h1>
          <h2>Per Month</h2>
        </Col>
      </Row>
    </>
  )
}

export default CreditRepair