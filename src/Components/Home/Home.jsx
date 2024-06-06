import React from 'react'
import "./Home.css";
import { Row, Col, Container } from 'react-bootstrap';
import images from '../../Common/Images/grp.png';
import Process from '../Process/Process';
import Carousels from '../Carousel/Carousels';
import Buttons from '../../Common/Buttons/Buttons';
import { useGlobal } from "../../Common/GlobalContext/GlobalContext";
// import Modals from "../../Common/Modals/Modals"
import Services from '../Services/Services';
import Background1 from "../../Common/Videos/bet.mp4"

// import Spline from '@splinetool/react-spline';

const Home = () => {
  const {response } = useGlobal();
  
  const notif = response ? (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div className={`toast show align-items-center text-bg-${response.toLowerCase().includes("err") ? "danger" : "success"} border-0`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    {response}
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
) : null;
  return (
    <Container>
      {notif}
      <Row className='centered'>
        <Col md={4} className='centered'>
          <img src={images} alt="GRP Enterprise" className='img-fluid scale-in-br' />
        </Col>
      </Row>
      <Row className='home-row justify-content-around py-3 gap-5'>
        <Col xs={12} md={5} className='centered'>
          <div className="card-body p-5 d-flex flex-column gap-3 home-card">
            <h1>Improve Credit Score <br /> with Expert Assistance</h1>
            <h6>
              <ul className='check'>
                <li>Dispute Inaccurate Credit Report Items</li>
                <li>Improve Credit Monitoring and Reporting</li>
                <li>Personalized Credit Improvement Strategies</li>
              </ul>
                <i className='text-danger small'>Disclaimer: Results may vary based on individual credit situation</i>
            </h6>
            <Buttons />
          </div>
        </Col>
        <Col xs={12} md={4} className='centered'>
          <video className='home-video' controls autoPlay muted loop>
            <source src={Background1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
      <Process />
      <Carousels />
      <Services />
    </Container>
  )
}

export default Home