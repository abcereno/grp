import React from 'react'
import "./Articles.css";
import { Row, Col } from "react-bootstrap";
import article from '../../Common/articles';
const Articles = () => {
    return (
        <Row style={{ minHeight: "calc(100vh - 80px)", background: "black" }} className='home-row vertical-scroll'>
                <Col>
            {article.map((items) => (
                <section key={items.id}  className="d-flex flex-column justify-content-center align-items-center gap-5 mt-5">
                    <img className='img-fluid' src={items.pic} alt="credit repair services" />
                    <h4>
                        <article>
                            {items.section}
                        </article>
                    </h4>
                </section>
            ))}
            </Col>
        </Row>
    )
}

export default Articles