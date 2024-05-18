import React from "react";
import "./contact.scss";
import { Button, Col, Container, Form, Image } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { isInValid, isValid } from "../common/forms";

export const ContactUs = () => {
  const initialValues = {
    formName: "",
    formEmail: "",
    formMessage: "",
    formSubject: "",
  };

  const validationSchema = Yup.object({
    formName: Yup.string()
      .required("Please enter your name.")
      .min(2, "Your name must be at least 2 characters.")
      .max(50, "Your name must be at most 50 characters."),
    formEmail: Yup.string()
      .email("Invalid email address.")
      .max(50, "Email address must be at most 50 characters.")
      .required("Please enter your email address."),
    formSubject: Yup.string()
      .required("Please enter your subject.")
      .min(2, "The subject must be at least 2 characters.")
      .max(50, "The subject must be at most 50 characters."),
    formMessage: Yup.string()
      .required("Please enter your message.")
      .min(15, "Your message must be at least 15 characters.")
      .max(250, "Your message must be at most 250 characters."),
  });

  const onSubmit = () => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="contact-container">
      <Col className="contact-form-col">
        <Form
          className="contact-form"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Form.Group className="form-group" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="formName"
              isInvalid={isInValid(formik, "formName")}
              isValid={isValid(formik, "formName")}
              {...formik.getFieldProps("formName")}
            />
            <Form.Control.Feedback type="invalid" className="formik-feedback">
              {formik.errors.formName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="form-group" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="formEmail"
              autoComplete="email"
              isInvalid={isInValid(formik, "formEmail")}
              isValid={isValid(formik, "formEmail")}
              {...formik.getFieldProps("formEmail")}
            />
            <Form.Control.Feedback type="invalid" className="formik-feedback">
              {formik.errors.formEmail}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="form-group" controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="formSubject"
              isInvalid={isInValid(formik, "formSubject")}
              isValid={isValid(formik, "formSubject")}
              {...formik.getFieldProps("formSubject")}
            />
            <Form.Control.Feedback type="invalid" className="formik-feedback">
              {formik.errors.formSubject}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="form-group" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="formMessage"
              rows={3}
              isInvalid={isInValid(formik, "formMessage")}
              isValid={isValid(formik, "formMessage")}
              {...formik.getFieldProps("formMessage")}
            />
            <Form.Control.Feedback type="invalid" className="formik-feedback">
              {formik.errors.formMessage}
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="send-button" type="submit">
            Send Message
          </Button>
        </Form>
      </Col>
      <Col className="contact-paragraf-col">
      <Image className="mail-image" src="../../mail.jpg" />
        <h2>We'd Love To Hear From You.</h2>
        We are here to answer any question you may have. As a partner of
        corporates, Prettier Homes has more than 200 offices of all sizes and
        all potential of session.
      </Col>
    </Container>
  );
};
