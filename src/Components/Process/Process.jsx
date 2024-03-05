import React from 'react';
import "./Process.css"
import { Row, Col } from 'react-bootstrap';
import process from "../../Common/process";
import pic from "../../Common/Images/grp.png";
const Process = () => {
    return (
        <Row style={{ background: "black" }} className='pt-5 pb-5 home-row vertical-scroll'>
                        <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
                <img className='img-fluid' src={pic} alt='Credit Repair Services' />
            </Col>
            <Col xs={12} md={6} className='flex-column'>
                <ol  className='custom-ordered-list'>
                    {process.map((items) => (
                        <li className='paragraph' key={items.id}>
                            <h1>{items.title}</h1>
                            <h6>{items.description}</h6>
                        </li>
                    ))}
                </ol>
            </Col>
        </Row>
    )
}

export default Process