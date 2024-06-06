import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import images from '../Images/grp.png';
import "./Navibar.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navibar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="md" className="z-1 navbar-custom mb-3">
        <Container fluid>
          <Navbar.Brand className='text-light'>
            <img
              alt={images}
              src={images}
              width="45"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            Credit Services
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} aria-controls={"offcanvasNavbar-expand-md"} />
          <Navbar.Offcanvas
            show={show}
            backdrop="static"
            onHide={handleClose}
            className="bg-dark text-light"
            id={"offcanvasNavbar-expand-md"}
            aria-labelledby={"offcanvasNavbarLabel-expand-md"}
            placement="end"
            
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={"offcanvasNavbarLabel-expand-md"}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link onClick={handleClose} className='nav-link px-2 text-light text-decoration-none mx-2' to="/">Home</Link>
                <Link onClick={handleClose} className='nav-link px-2 text-light text-decoration-none mx-2' to="/how">How It Works</Link>
                <Link onClick={handleClose} className='nav-link px-2 text-light text-decoration-none mx-2' to="/pricing">Pricing</Link>
                <Link onClick={handleClose} className='nav-link px-2 text-light text-decoration-none mx-2' to="/freqasked">FAQs</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
