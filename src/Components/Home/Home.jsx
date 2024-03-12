import React from 'react'
import "./Home.css";
import { Row, Col, Button } from 'react-bootstrap';
import images from '../../Common/images';
import Cards from '../Cards/Cards';
import Process from '../Process/Process';
import Carousels from '../Carousel/Carousels';
// import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <>
      <Row style={{background: "black", color:"white" }} className='home-row vertical-scroll'>
        <Row style={{ minHeight: "calc(100vh - 80px)", }}>

        <Col xs={12} md={6} className='d-flex flex-column justify-content-center gap-3 scale-in-br'>
          <h1>Transform Your Financial Future</h1>
          <h3>
            Gain Confidence, Build Success, and Prosper with Gain Build Prosper Credit Repair!
          </h3>
          <Button style={{width:"12rem"}}>
            Get Started
          </Button>
        </Col>
        <Col xs={12} md={6}  className='d-flex flex-column justify-content-center gap-3 scale-in-br'>
          <img src={images[0].src} alt={images[0].alt} className='img-fluid scale-in-br' />
        </Col>
        </Row>
      <Cards/>
      <Process/>
      <Carousels/>
      </Row>
    </>
  )
}

export default Home