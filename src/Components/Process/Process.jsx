import React from 'react';
import "./Process.css"
import { Row, Col, Container } from 'react-bootstrap';
import process from "../../Common/process";
import pic from "../../Common/Images/grp.png";
const Process = () => {
    return (
        <Container>
            <Row className='py-5 gap-5process d-flex justify-content-center align-items-center flex-wrap gap-5'>
            <h1 class="d-flex justify-content-center align-items-center mb-5">YOU'RE JUST 4 STEPS AWAY</h1>
                {process.map((items) => (
                    <Col xs={12} md={5} className='flex-column text-center steps p-0 mb-5'>
                        <div class="card-body p-5 d-flex flex-column gap-3">
                            <div class="d-flex justify-content-center">
                                <img className='img-fluid' width={100} height={100} src={pic} alt="Credit Repair" />
                            </div>
                            <h3 class="card-title">
                                <strong>{items.title}</strong>
                            </h3>
                            <p class="card-text truncate-bottom">
                                {items.description}
                            </p>
                        </div>
                    </Col>
                ))}
            </Row >
        </Container>
    )
}

export default Process