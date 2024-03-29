import React from 'react';
import "./Process.css"
import { Row, Col } from 'react-bootstrap';
import process from "../../Common/process";
import pic from "../../Common/Images/grp.png";
const Process = () => {
    return (
        <Row style={{ background: "black" }} className='pt-5 pb-5 home-row vertical-scroll'>
                <h1 className='d-flex justify-content-center align-items-center' style={{borderBottom:"1px solid rgb(255, 215, 0)"}}>YOU'RE JUST 4 STEPS AWAY</h1>
            <Col xs={12} md={5} className='d-flex justify-content-center align-items-center'>
                <img className='img-fluid' src={pic} alt='Credit Repair Services' />
            </Col>
            <Col xs={12} md={7} className='flex-column'>
                <ol className='custom-ordered-list'>
                    {process.map((items) => (
                        <li className='paragraph pt-2 pb-2' key={items.id}>
                            <h1  style={{borderBottom:"1px solid rgb(255, 215, 0)"}}>{items.title}</h1>
                            <h6>{items.description}</h6>
                        </li>
                    ))}
                </ol>
            </Col>
            <p style={{fontSize:"1.5rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit numquam laboriosam minus molestias ut ab eos inventore molestiae, illo officia laudantium voluptates. Qui soluta est in officiis distinctio consequatur earum culpa sint quis, totam suscipit quam odit magnam laudantium adipisci maiores nisi voluptas a sunt. Officiis nostrum ipsa maiores eveniet. Mollitia delectus suscipit iusto quibusdam reiciendis molestias ipsum deleniti, ab laudantium odio odit facilis fuga, architecto, fugit ipsa aliquid dolorum dolore natus est cumque. Accusantium eius commodi consequatur sed error fugit cupiditate perferendis autem reprehenderit, deleniti ipsa vel dolore adipisci ad modi repudiandae ab vero quis, amet doloribus quam eligendi.</p>
        </Row>
    )
}

export default Process