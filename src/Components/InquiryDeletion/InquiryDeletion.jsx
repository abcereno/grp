import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Buttons from '../../Common/Buttons/Buttons'
const InquiryDeletion = () => {
  return (
    <>
      <Col className='d-flex flex-column home-card py-5'>
        <article className='py-2'>
          <strong>Hard inquiries</strong> on your credit report can be a drag on your credit score, making it harder to qualify for the best loans, mortgages, and even insurance rates.  Here's why you should consider removing inaccurate hard inquiries:
        </article>
        <article className='py-2'>
        <strong>Boost your credit score:</strong> Every hard inquiry can lower your score by a few points, but removing inaccurate ones can help it rebound. A higher score unlocks better interest rates and loan terms.
        </article>
        <article className='py-2'>
        <strong>Qualify for better loans:</strong> A clean credit report with minimal hard inquiries makes you a more attractive borrower in the eyes of lenders. This can translate to lower interest rates and better loan terms.
        </article>
        <article className='py-2'>
        <strong>Save money on insurance:</strong> Some insurance companies factor in your credit score when calculating your rates. Removing inaccurate inquiries can help you secure lower insurance premiums.
        </article>
        <article className='py-2'>
        <strong>Shop for credit with confidence:</strong> Knowing your credit report is accurate allows you to confidently shop for the best credit offers without worrying about surprise inquiries affecting your score.
        </article>
        <article className='py-2'>
        <strong>Peace of mind:</strong> A clean credit report gives you peace of mind knowing that lenders are seeing the most accurate picture of your creditworthiness.
        </article>
        <Buttons />
      </Col>
      <Row className='g-0 py-5'>
        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <h1>Price starts at <strong>$250</strong></h1>
        </Col>
      </Row>
    </>
  )
}
export default InquiryDeletion