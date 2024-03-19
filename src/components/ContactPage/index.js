import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { getDatabase, push, ref } from 'firebase/database';
import axios from 'axios'; // For form submission (if needed)
import ReCAPTCHA from "react-google-recaptcha"; // For reCAPTCHA verification (optional)
import './ContactPage.css'; // Import your custom CSS file

// Firebase configuration (replace with your project's details)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);


const ContactPage = () => {
  // Define state for email, phone number, and message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null); // State to store reCAPTCHA value

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
    // Check if reCAPTCHA is verified
    if (!recaptchaValue) {
      alert("Please verify that you're not a robot.");
      return;
    }

    try {
      // Verify reCAPTCHA response with Google's servers
      const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
        secret: process.env.REACT_APP_RECAPTCHA_SECRET_KEY,
        response: recaptchaValue,
      });

      // Check if the reCAPTCHA verification was successful
      if (!response.data.success) {
        alert("reCAPTCHA verification failed. Please try again.");
        return;
      }

      // Save form data to Firebase Real-time Database
      const database = getDatabase();
      const contactsRef = ref(database, '');
      const newContactRef = push(contactsRef, {
        name,
        email,
        phone: phonenumber,
        message,
        timestamp: Date.now()
      });

      // Clear form fields
      setName('');
      setEmail('');
      setPhonenumber('');
      setMessage('');

      // Extract the Firebase key of the newly added contact
      const contactKey = newContactRef.key;

      // Call a Cloud Function (or another backend service) to send email
      await axios.post("<YOUR_FUNCTION_URL>", {
        email,
        subject: "New Contact Form Submission",
        message: `Name: ${name}\nEmail: ${email}\nPhone: ${phonenumber}\nMessage: ${message}\nFirebase Key: ${contactKey}`
      });

      // Success message
      console.log("Email sent successfully!");
    } catch (error) {
      console.error('Error verifying reCAPTCHA or saving data to Firebase:', error);
    }
  };


  const onChange = (value) => {
    // Update the reCAPTCHA value
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
                                placeholder="Your message" style={{height: '150px', width: '350px'}}/>
                </Col>
              </Form.Group>
              <Row className="justify-content-center mb-3">
                <Col sm={10} md={8} lg={6} className="text-center">
                  <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={onChange}/>
                </Col>
              </Row>
              <Button variant="primary" type="submit" className="mt-3">Send</Button>
              <div>
                <footer className="footer mt-auto">
                  {/* Footer with mt-auto for bottom placement */}
                  <ul className="social-links">
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</a></li>
                    <li><a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a></li>
                  </ul>
                  <p className="copyright">
                    &copy; {new Date().getFullYear()} Tsele Molelekoa. All rights reserved.
                  </p>
                </footer>
              </div>
            </Form>

            {/* Footer */}
          </Row>
          </div>
        </Container>
  );
};

export default ContactPage;
