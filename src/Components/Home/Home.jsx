import React from 'react'
import "./Home.css";
import { Row, Col, Container } from 'react-bootstrap';
import images from '../../Common/images';
import Process from '../Process/Process';
import Carousels from '../Carousel/Carousels';
import Buttons from '../../Common/Buttons/Buttons';
import { useGlobal } from "../../Common/GlobalContext/GlobalContext";
import Modals from "../../Common/Modals/Modals"
import Services from '../Services/Services';
// import Spline from '@splinetool/react-spline';

const Home = () => {
  const { showModal, setShowModal } = useGlobal();

  return (
    <Container>
      <Row className='home-row justify-content-around'>
        <Col xs={12} md={5} className='centered'>
          <div class="card-body p-5 d-flex flex-column gap-3 home-card scale-in-br">
            <h1>REPAIR <br /> YOUR CREDIT<br /> TODAY</h1>
            <h6>
              <ul>
                <li>Gain Increased Credit Power</li>
                <li>Remove Negative Items From Your Report</li>
                <li>Money-Back Guarantee</li>
              </ul>
            </h6>
          <Buttons/>
          </div>
        </Col>
        {showModal && <Modals showModal={showModal} setShowModal={setShowModal} />}
        <Col xs={12} md={4} className='d-flex flex-column justify-content-center gap-3 scale-in-br'>
          <img src={images[0].src} alt={images[0].alt} className='img-fluid scale-in-br' />
        </Col>
      </Row>
      <Process />
      <Carousels />
      <Services/>
    </Container>
  )
}

export default Home