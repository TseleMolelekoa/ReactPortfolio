import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref } from 'firebase/database';
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactPage.css";
import Discord from "../assets/discord_.png";
import Git from "../assets/249191_social media_github_git_social_octocat_icon.png";
import GMail from "../assets/1220340_gmail_google_mail_icon.png";
import linkedIn from "../assets/249188_linked in_social network_social media_linkedin_social_icon.png";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnPA0wJ18jdleLYsvck4_r3a9BVSyaXjo",
  authDomain: "contact-me-d671e.firebaseapp.com",
  databaseURL: "https://contact-me-d671e-default-rtdb.firebaseio.com",
  projectId: "contact-me-d671e",
  storageBucket: "contact-me-d671e.appspot.com",
  messagingSenderId: "763690874771",
  appId: "1:763690874771:web:d44fbea7de444f26995a66"
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
      // Save form data to Firebase Real-time Database
      const database = getDatabase();
      const contactsRef = ref(database, 'contacts');
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
      console.error('Error saving data to Firebase or sending email:', error);
    }
  };

  const onChange = (value) => {
    // Update the reCAPTCHA value
    setRecaptchaValue(value);
  };

  // Render the component
  return (
    <div id='contacts'>
      <h3 className='heading'>Get In Touch</h3>
      <div className="Contact">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleInputChange}
                   placeholder="Enter Your Full Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleInputChange}
                   placeholder="Enter Your E-mail"/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={phonenumber} onChange={handleInputChange}
                   placeholder="Enter Your Phone Number"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={message} onChange={handleInputChange}
                      placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send</button>
          <ReCAPTCHA
              sitekey="6LfWEnwpAAAAAKAo_8lVnuzgduZXdSFvxDFGuK7u"
              onChange={onChange}
          />
        </form>
        <footer className="footer">
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} className="footer-icon"/></a>
            </li>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src={Git} className="footer-icon"/></a></li>
            <li><a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><img src={Discord} className="footer-icon"/></a></li>
            <li><a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer"><img src={GMail} className="footer-icon"/></a></li>
          </ul>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Tsele Molelekoa. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
