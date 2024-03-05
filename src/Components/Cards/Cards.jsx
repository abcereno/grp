import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import data from "../../Common/images"

const Cards = () => {
    return (
        <Row style={{background: "black" }} className='home-row vertical-scroll pt-5 pb-5'>
            {data.map((items) => (
                <Col key={items.id} className='d-flex justify-content-center align-items-center'>
                    <Card style={{ width: '18rem', background: `url(${items.pic})` }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Cards