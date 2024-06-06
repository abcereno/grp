import Forms from "../../Common/Forms/Forms";
import "./Carousels.css"
import Background from "../../Common/Videos/deal.mp4"
import { Row, Col, Container } from "react-bootstrap";
function Carousels() {

  return (
    <Container style={{ background: "black" }}>
    <Row className="py-3 carousel">
      <Col xs={12} md={6} className="centered pb-5">
      <video className="carousel-video" controls muted loop autoPlay>
      <source src={Background} type="video/mp4" />
    </video>
      </Col>
      <Col xs={12} md={6} className="d-flex flex-column steps home-card gap-2 py-1">
        <h1>Signup Today!</h1>
        <Forms />
      </Col>
    </Row>
    </Container>
  );
}

export default Carousels;