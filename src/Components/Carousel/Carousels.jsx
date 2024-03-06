import pic from "../../Common/Images/placeholder.jpg";
import { Row, Col,Carousel } from "react-bootstrap";
function Carousels() {
  return (
    <Row style={{ background: "black",  color:"white"  }} className='home-row vertical-scroll'>
    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
        <h1>Trusted by people</h1>
      </Col>
      <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
      <Carousel>
      <Carousel.Item>
        <img src={pic} alt="" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={pic} alt="" text="second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={pic} alt="" text="third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Col>
    </Row>
  );
}

export default Carousels;