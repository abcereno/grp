import React, {useState} from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import CreditRepair from "../CreditRepair/CreditRepair"
import InquiryDeletion from "../InquiryDeletion/InquiryDeletion"
import Services from '../Services/Services';

const Pricing = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (component) => {
    setActiveComponent(component);
  };
  return (
    <Container>
      <h1 className='centered py-5'>Pricing</h1>
      <nav className="nav nav-pills nav-fill">
        <Button className="nav-link text-warning" onClick={() => handleClick(<CreditRepair />)}>Credit Repair</Button>
        <Button className="nav-link text-warning" onClick={() => handleClick(<InquiryDeletion />)}>Inquiry Deletion</Button>
      </nav>
      <Row className='py-5'>
        {activeComponent}
      </Row>
      <Services/>
    </Container>
  )
}

export default Pricing