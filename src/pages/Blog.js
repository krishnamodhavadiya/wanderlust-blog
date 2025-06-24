import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Blog.css';

// Sample blog posts data (replace with API call in a real app)
const allPosts = [
  {
    id: 1,
    title: 'Exploring the Swiss Alps',
    excerpt: 'Discover the breathtaking beauty of the Swiss Alps and our unforgettable hiking adventures through some of the most stunning landscapes in Europe.',
    image: `${process.env.PUBLIC_URL}/images/alps2.png`,
    date: 'June 10, 2023',
    category: 'Adventure',
    author: 'Alex Johnson',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Cultural Journey Through Kyoto',
    excerpt: 'Immerse yourself in the rich culture and traditions of Kyoto, Japan\'s ancient capital, from tranquil temples to vibrant geisha districts.',
    image: `${process.env.PUBLIC_URL}/images/kyoto.png`,
    date: 'May 28, 2023',
    category: 'Culture',
    author: 'Maria Garcia',
    readTime: '7 min read',
    featured: true
  },
  {
    id: 3,
    title: 'Beach Paradise in Bali',
    excerpt: 'Relax and unwind at the most beautiful beaches in Bali, Indonesia, where turquoise waters meet golden sands and lush tropical landscapes.',
    image: `${process.env.PUBLIC_URL}/images/beach.png`,
    date: 'May 15, 2023',
    category: 'Beach',
    author: 'James Wilson',
    readTime: '4 min read',
    featured: true
  },
  {
    id: 4,
    title: 'Safari Adventure in Tanzania',
    excerpt: 'Experience the thrill of spotting the Big Five on an unforgettable safari through the Serengeti and Ngorongoro Crater.',
    image: `${process.env.PUBLIC_URL}/images/tanzania.jpeg`,
    date: 'April 22, 2023',
    category: 'Adventure',
    author: 'Alex Johnson',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Culinary Delights of Italy',
    excerpt: 'A food lover\'s guide to the best regional dishes and hidden trattorias across Italy, from Rome to Sicily.',
    image: `${process.env.PUBLIC_URL}/images/itly.jpeg`,
    date: 'April 10, 2023',
    category: 'Food',
    author: 'Maria Garcia',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Hiking the Inca Trail to Machu Picchu',
    excerpt: 'Our journey along the ancient Inca Trail to the breathtaking ruins of Machu Picchu, one of the New Seven Wonders of the World.',
    image: `${process.env.PUBLIC_URL}/images/mahu.jpeg`,
    date: 'March 28, 2023',
    category: 'Adventure',
    author: 'James Wilson',
    readTime: '9 min read',
    featured: false
  },
  {
    id: 7,
    title: 'Island Hopping in Greece',
    excerpt: 'Discover the best Greek islands for your next Mediterranean getaway, from the iconic Santorini to the lesser-known gems.',
    image: `${process.env.PUBLIC_URL}/images/greece.png`,
    date: 'March 15, 2023',
    category: 'Beach',
    author: 'Alex Johnson',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 8,
    title: 'Street Food Safari in Thailand',
    excerpt: 'A culinary adventure through Bangkok\'s vibrant street food scene, where every corner offers new flavors and aromas.',
    image: `${process.env.PUBLIC_URL}/images/food.jpeg`,
    date: 'February 28, 2023',
    category: 'Food',
    author: 'Maria Garcia',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 9,
    title: 'Northern Lights in Norway',
    excerpt: 'Chasing the magical Aurora Borealis in Norway\'s Arctic Circle, where nature puts on the most spectacular light show on Earth.',
    image: `${process.env.PUBLIC_URL}/images/rice.jpeg`,
    date: 'February 15, 2023',
    category: 'Adventure',
    author: 'James Wilson',
    readTime: '7 min read',
    featured: false
  }
];

const categories = ['All', 'Adventure', 'Culture', 'Beach', 'Food'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts by category and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Featured post (first featured post in the filtered list)
  const featuredPost = filteredPosts.find(post => post.featured);
  
  // Regular posts (all non-featured posts in the filtered list)
  const regularPosts = filteredPosts.filter(post => !post.featured || post.id === featuredPost?.id ? false : true);

  return (
    <div className="blog-page">
      {/* Page Header */}
      <header className="blog-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Travel Stories & Guides */}
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover inspiring travel stories, expert tips, and destination guides from around the world.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="search-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="search-box">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on new search
                }}
              />
            </div>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div 
            className="category-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1); // Reset to first page on category change
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="blog-main">
        <div className="container">
          {/* Featured Post */}
          {featuredPost && currentPage === 1 && (
            <motion.section 
              className="featured-post"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className="category-tag">{featuredPost.category}</span>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span className="date">
                    <FontAwesomeIcon icon={faCalendarAlt} /> {featuredPost.date}
                  </span>
                  <span className="author">
                    <FontAwesomeIcon icon={faUser} /> {featuredPost.author}
                  </span>
                  <span className="read-time">{featuredPost.readTime}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <Link to={`/blog/${featuredPost.id}`} className="read-more">
                  Read Full Story <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </motion.section>
          )}

          {/* Blog Grid */}
          <section className="blog-grid">
            {currentPosts
              .filter(post => !post.featured || post.id !== featuredPost?.id)
              .map((post, index) => (
                <motion.article 
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <span className="category-tag">{post.category}</span>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <span className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} /> {post.date}
                      </span>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read More <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </motion.article>
              ))}
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className="pagination"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <button 
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className="pagination-arrow"
              >
                &laquo; Prev
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`pagination-number ${currentPage === number ? 'active' : ''}`}
                >
                  {number}
                </button>
              ))}
              
              <button 
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className="pagination-arrow"
              >
                Next &raquo;
              </button>
            </motion.div>
          )}
        </div>
      </main>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Never Miss a Story</h2>
            <p>Subscribe to our newsletter for the latest travel stories, tips, and destination guides.</p>
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

export default Blog;
