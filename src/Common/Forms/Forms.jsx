import "./Forms.css"
import * as formik from 'formik';
import * as yup from 'yup';
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap"
import axios from "axios";
import { useGlobal } from "../GlobalContext/GlobalContext";

const Forms = () => {
  const { setShowModal, setResponse } = useGlobal();
  const { Formik } = formik;
  const registerLead = async (values) => {
    try {
      const response = await axios.post("/grp/prospects", values); // Replace with your API endpoint
      setShowModal(false);
      setResponse(response.data.message);
        // Handle successful submission (e.g., clear form, show success message)
    } catch (error) {
      return (<div class="alert alert-danger" role="alert">
        {error}
      </div>)
      // Handle errors (e.g., display error message to user)
    }
  }
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email('Invalid email format').required(),
    contact: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={registerLead}
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
                placeholder="Jane"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={
                  (errors.firstName && !errors.firstName.required) ||
                    (!touched.firstName && !touched.lastName) ?
                    false : touched.firstName && !errors.firstName && touched.lastName && !errors.lastName
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName || "First name is required"}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" xs="12" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={
                  (errors.lastName && !errors.lastName.required) ||
                    (!touched.firstName && !touched.lastName) ?
                    false : touched.firstName && !errors.firstName && touched.lastName && !errors.lastName
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName || "Last name is required"}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email || "email is required"}
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
                {errors.contact || "contact is required"}
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
            <Button className="btn-warning" type="submit">Submit Form</Button>
        </Form>
      )}
    </Formik>
  )
}

export default Forms