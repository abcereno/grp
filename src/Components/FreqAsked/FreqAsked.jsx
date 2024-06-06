import React from 'react'
import Accordions from '../../Common/Accordions/Accordions'
import Faq from "../../Common/Faqs"
import { Col, Container, Row } from 'react-bootstrap'
const FreqAsked = () => {
  return (
    <>
    <Container>
        <Row>
          <Col>
            <Accordions Faq={Faq} />
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default FreqAsked