import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <header className="contact-header">
        <div className="container">
          { <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Get In Touch */}
          </motion.h1> }
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have questions or want to work together? We'd love to hear from you!
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.section 
              className="contact-form-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <FontAwesomeIcon icon={faPaperPlane} />
                    </>
                  )}
                </button>
              </form>
            </motion.section>
            
            {/* Contact Info */}
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <p className="info-description">
                  Have questions about our travel experiences or want to collaborate? 
                  Reach out to us through any of the channels below.
                </p>
                
                <ul className="contact-details">
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="detail">
                      <h4>Location</h4>
                      <p>123 Travel Street, Wanderlust City, 10001</p>
                    </div>
                  </li>
                  
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="detail">
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </li>
                  
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="detail">
                      <h4>Email</h4>
                      <p>hello@wanderlust.com</p>
                    </div>
                  </li>
                </ul>
                
                <div className="business-hours">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                
                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Map Section */}
          <motion.section 
            className="map-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Find Us on the Map</h2>
            <div className="map-container">
              <iframe 
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.21520905654!2d-73.9881176845937!3d40.75798587932682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.section>
        </div>
      </main>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Next Adventure?</h2>
            <p>Subscribe to our newsletter for exclusive travel tips and destination guides.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
