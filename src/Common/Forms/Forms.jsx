import "./Forms.css"
import * as formik from 'formik';
import "./Forms.css"
import * as yup from 'yup';
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap"
import axios from "axios";
import { useGlobal } from "../GlobalContext/GlobalContext";
import { useState } from "react";

const Forms = () => {
    const { setShowModal, setResponse } = useGlobal();
    const { Formik } = formik;
    const [isLoading, setIsLoading] = useState(false);
    const registerLead = async (values, { setSubmitting, setErrors, resetForm }) => {
        setIsLoading(true);
        try {
            const res = await axios.post("/grp/prospects", values);
            setResponse(res.data.message);
            setShowModal(false);
            resetForm();
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Server-side validation errors
                setErrors(error.response.data);
            } else {
                // Handle other errors
                setResponse('An error occurred. Please try again.');
            }
        } finally {
            setIsLoading(false);
            setSubmitting(false);
            setTimeout(() => setResponse(false), 3000);
        }
    };
    
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email('Invalid email format').required(),
        contact: yup.string().required(),
        promo: yup.string().nullable().max(255),
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
        promo: '',
    }}
>
    {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form id='submitform' noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" xs="12" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Jane"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isInvalid={touched.firstName && !!errors.firstName}
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
                        isInvalid={touched.lastName && !!errors.lastName}
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
                            isInvalid={touched.email && !!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email || "Email is required"}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormik03">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        name="contact"
                        value={values.contact}
                        onChange={handleChange}
                        isInvalid={touched.contact && !!errors.contact}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.contact || "Contact is required"}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormik04">
                    <Form.Label>Promo Code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="promo"
                        name="promo"
                        value={values.promo}
                        onChange={handleChange}
                        isInvalid={touched.promo && !!errors.promo}
                    />
                </Form.Group>
            </Row>
            <Button className="btn-warning" type="submit" disabled={isLoading}>Submit Form</Button>
            {isLoading && (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            {/* Displaying Formik Errors */}
            {errors.general && (
                <div className="error-message">
                    {errors.general}
                </div>
            )}
        </Form>
    )}
</Formik>
    )
}

export default Forms