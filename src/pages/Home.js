import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

// Sample blog posts data (replace with real data from an API later)
const featuredPosts = [
  {
    id: 1,
    title: 'Adventure in the Wild',
    excerpt: 'Discover breathtaking landscapes and thrilling experiences in the great outdoors.',
    image: '/images/adventure.png',
    date: 'June 10, 2023',
    category: 'Adventure'
  },
  {
    id: 2,
    title: 'Exploring Portugal',
    excerpt: 'Experience the rich culture and stunning architecture of Portugal.',
    image: '/images/portu.png',
    date: 'May 28, 2023',
    category: 'Culture'
  },
  {
    id: 3,
    title: 'Mountain Adventures',
    excerpt: 'Conquer new heights with our guide to the best mountain destinations.',
    image: '/images/mountain.png',
    date: 'May 15, 2023',
    category: 'Mountains'
  }
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the World with Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Explore breathtaking destinations and create unforgettable memories with our travel guides and tips.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/blog" className="btn btn-primary">
              Start Exploring <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <div className="section-header">
            <h2>Latest Adventures</h2>
            <p>Explore our most recent travel stories and experiences from around the globe.</p>
          </div>
          
          <div className="post-grid">
            {featuredPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="post-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="post-image" style={{ backgroundImage: `url(${post.image})` }}></div>
                <div className="post-content">
                  <span className="post-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read More <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/blog" className="btn btn-outline">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready for Your Next Adventure?</h2>
            <p>Subscribe to our newsletter for exclusive travel tips and destination guides.</p>
            <form className="cta-form">
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

export default Home;
