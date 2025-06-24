import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faMountain, faUtensils, faCamera } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const About = () => {
  const features = [
    {
      icon: faGlobeAmericas,
      title: 'Global Coverage',
      description: 'Discover hidden gems and popular destinations across all continents.'
    },
    {
      icon: faMountain,
      title: 'Adventure Awaits',
      description: 'From hiking trails to scuba diving, find your next adventure with us.'
    },
    {
      icon: faUtensils,
      title: 'Local Cuisine',
      description: 'Explore authentic local dishes and culinary experiences around the world.'
    },
    {
      icon: faCamera,
      title: 'Photo Stories',
      description: 'Stunning photography that captures the essence of each destination.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Lead Explorer',
      image: `${process.env.PUBLIC_URL}/images/alen.png`,
      bio: 'Travel enthusiast with over 10 years of experience exploring remote corners of the world.'
    },
    {
      name: 'Maria Garcia',
      role: 'Photography Director',
      image: `${process.env.PUBLIC_URL}/images/maria.png`,
      bio: 'Award-winning photographer capturing the beauty of cultures and landscapes.'
    },
    {
      name: 'James Wilson',
      role: 'Travel Writer',
      image: `${process.env.PUBLIC_URL}/images/james.png`,
      bio: 'Storyteller with a passion for sharing authentic travel experiences and tips.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Story</h1>
            <p>Discover the passion behind our travels and our mission to inspire your next adventure.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Mission</h2>
              <p>At Wanderlust, we believe that travel has the power to change lives. Our mission is to inspire and enable people to explore the world, experience new cultures, and create lasting memories.</p>
              <p>Founded in 2018, we've grown from a small travel blog to a global community of adventure seekers, sharing authentic stories and practical advice to help you travel smarter and more meaningfully.</p>
            </motion.div>
            <motion.div 
              className="mission-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={`${process.env.PUBLIC_URL}/images/adven1.jpg`}
                alt="Travel Adventure"
                className="mission-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>What makes our travel experiences unique and unforgettable</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate travelers behind Wanderlust</p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of travelers who trust us to make their adventures unforgettable.</p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
