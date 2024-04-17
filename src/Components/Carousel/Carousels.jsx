import Forms from "../../Common/Forms/Forms";
import pic from "../../Common/Images/grp.png";
import { Row, Col } from "react-bootstrap";
function Carousels() {
  return (
    <Row style={{ background: "black" }} className='home-row vertical-scroll'>
      <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={pic} alt="Credit Repair" />
      </Col>
      <Col xs={12} md={6} className="d-flex flex-column steps home-card gap-2 py-5">
        <h1>Trusted by people</h1>
        <h3>Signup Today!</h3>
        <Forms />
      </Col>
    </Row>
  );
}

export default Carousels;