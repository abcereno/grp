import { Navbar, Container, Nav} from 'react-bootstrap';

import images from '../images';
import "./Navibar.css"

const Navibar = () => {
  return (
    <>
    <Navbar className='z-1 navbar-custom navbar navbar-expand-md navbar-light' expand="lg">
      <Container>
        <Navbar.Brand className='text-light' href="/">
          <img
            alt={images[0].alt}
            src={images[0].src}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          Credit Services
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-light' to="/">Home</Nav.Link>
            <Nav.Link className='text-light' to="/how">How It Works</Nav.Link>
            <Nav.Link className='text-light' to="/Pricing">Pricing</Nav.Link>
            <Nav.Link className='text-light' to="/freqasked">FAQs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navibar;
