import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav,Modal,Button,InputGroup,Form,Row, Col } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import images from '../images';
import "./Navibar.css"

const Navibar = () => {
  const [navbarStyle, setNavbarStyle] = useState({ background: 'black', color: 'white' });
  const [show, setShow] = useState(false);
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarStyle({ background: 'gray', color: 'black' });
      } else {
        setNavbarStyle({ background: 'black', color: 'white' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect will run once on mount

  return (
    <>
    <Navbar style={{ ...navbarStyle, position: 'sticky', top: '0', zIndex: '1', transition:"all 0.3s ease-in" }} expand="lg">
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
          <Nav className="me-auto">
            <Nav.Link className='text-light' href="/">Home</Nav.Link>
            <Nav.Link className='text-light' href="/articles">Articles</Nav.Link>
            <Nav.Link className='text-light' onClick={handleShow}>Sign Up</Nav.Link>
            <Nav.Link className='text-light' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-signup'>
          <Modal.Title>You will recieve a text/email from us</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-signup'>
        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" xs="12" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6"  xs="12"controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="contact"
                name="contact"
                value={values.contact}
                onChange={handleChange}
                isInvalid={!!errors.contact}
              />

              <Form.Control.Feedback type="invalid">
                {errors.contact}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
        </Modal.Body>
        <Modal.Footer  className='modal-signup'>
          <Button  className='modal-signup' variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navibar;
