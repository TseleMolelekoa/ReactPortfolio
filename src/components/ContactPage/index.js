// ContactPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactPage.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhonenumber(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Please verify that you're not a robot.");
      return;
    }

    try {
      await axios.post('/send-email', { name, email, phonenumber, message });
      setSuccessMessage('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const onChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
      <Container className='container'>
        <div className="contact-form-box">
          <h3 className="heading text-center mb-4">Get In Touch</h3>
          <Row className="justify-content-center">
            <Form id="contact-form" onSubmit={handleSubmit}>
              <Form.Group as={Row} controlId="formName" className="mb-3">
                <Col sm={10} md={8} lg={6} className="mx-auto">
                  <Form.Control type="text" name="name" value={name} onChange={handleInputChange}
                                placeholder="Enter Your Full Name"/>
                </Col>
              </Form.Group>
              {/* Form fields for email, phone, and message */}
              <Form.Group as={Row} controlId="formEmail" className="mb-3">
                <Col sm={10} md={8} lg={6} className="mx-auto">
                  <Form.Control type="email" name="email" value={email} onChange={handleInputChange}
                                placeholder="Enter Your E-mail"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPhone" className="mb-3">
                <Col sm={10} md={8} lg={6} className="mx-auto">
                  <Form.Control type="tel" name="phone" value={phonenumber} onChange={handleInputChange}
                                placeholder="Enter Your Phone Number"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formMessage" className="mb-3">
                <Col sm={10} md={8} lg={6} className="mx-auto">
                  <Form.Control as="textarea" name="message" type="message" value={message} onChange={handleInputChange}
                                placeholder="Your message" style={{height: '150px'}}/>
                </Col>
              </Form.Group>
              {/* reCAPTCHA integration */}
              <Row className="justify-content-center mb-3">
                <Col sm={10} md={8} lg={6} className="text-center">
                  <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={onChange}/>
                </Col>
              </Row>
              <Button variant="primary" type="submit" className="mt-3">Send</Button>
              {/* Success message */}
              {successMessage && <p className="text-success mt-3">{successMessage}</p>}
              {/* Footer */}
            </Form>
          </Row>
        </div>
        <footer className="footer mt-auto">
          {/* Footer with mt-auto for bottom placement */}
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/tselemolelekoa" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/tselemolelekoa/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="mailto:tsele.molelekoa@younglings.africa" target="_blank" rel="noopener noreferrer">Gmail</a></li>
          </ul>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Developed by:Tsele Molelekoa. All rights reserved.
          </p>
        </footer>
      </Container>
  );
};

export default ContactPage;
