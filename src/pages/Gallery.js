import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faChevronLeft, faChevronRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Gallery.css';

// Sample gallery data - replace with your actual images
const galleryData = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    category: 'nature',
    location: 'Swiss Alps, Switzerland',
    image: `${process.env.PUBLIC_URL}/images/mountain1.png`,
  },
  {
    id: 2,
    title: 'Beach Paradise',
    category: 'beach',
    location: 'Maldives',
    image: `${process.env.PUBLIC_URL}/images/beach.png`,
  },
  {
    id: 3,
    title: 'City Lights',
    category: 'urban',
    location: 'Tokyo, Japan',
    image: `${process.env.PUBLIC_URL}/images/light.png`,
  },
  {
    id: 4,
    title: 'Desert Dunes',
    category: 'desert',
    location: 'Sahara Desert, Africa',
    image: `${process.env.PUBLIC_URL}/images/dessert.png`,
  },
  {
    id: 5,
    title: 'Tropical Waterfall',
    category: 'nature',
    location: 'Iguazu Falls, Brazil',
    image: `${process.env.PUBLIC_URL}/images/waterfall.png`,
  },
  {
    id: 6,
    title: 'Historic Castle',
    category: 'architecture',
    location: 'Neuschwanstein, Germany',
    image: `${process.env.PUBLIC_URL}/images/castle.png`,
  },
  {
    id: 7,
    title: 'Northern Lights',
    category: 'nature',
    location: 'Tromsø, Norway',
    image: `${process.env.PUBLIC_URL}/images/northern.png`,
  },
  {
    id: 8,
    title: 'Mountain Village',
    category: 'mountain',
    location: 'Swiss Alps, Switzerland',
    image: `${process.env.PUBLIC_URL}/images/village.png`,
  },
  {
    id: 9,
    title: 'Tropical Beach',
    category: 'beach',
    location: 'Bora Bora, French Polynesia',
    image: `${process.env.PUBLIC_URL}/images/bora.png`,
  },
  {
    id: 10,
    title: 'Ancient Ruins',
    category: 'historical',
    location: 'Machu Picchu, Peru',
    image: `${process.env.PUBLIC_URL}/images/ancient.png`,
  },
  {
    id: 11,
    title: 'Mountain Lake',
    category: 'nature',
    location: 'Banff National Park, Canada',
    image: `${process.env.PUBLIC_URL}/images/lake.png`,
  },
  {
    id: 12,
    title: 'Desert Oasis',
    category: 'desert',
    location: 'Wadi Rum, Jordan',
    image: `${process.env.PUBLIC_URL}/images/oasis.png`,
  },
];

// Get unique categories
const getCategories = () => {
  const categories = ['all', ...new Set(galleryData.map(item => item.category))];
  return categories;
};

const categories = getCategories();

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Filter images based on selected category and search query
  const filteredImages = galleryData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle image click to open lightbox
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous image
  const prevImage = () => {
    setIsLoading(true);
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  // Navigate to next image
  const nextImage = () => {
    setIsLoading(true);
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  };

  // Handle click outside image to close lightbox
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  };

  return (
    <div className="gallery-page">
      {/* Gallery Header */}
      <header className="gallery-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Travel Gallery
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore breathtaking destinations from around the world
          </motion.p>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="gallery-main">
        <div className="container">
          {/* Search and Filter */}
          <motion.div 
            className="gallery-controls"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="search-container">
              <div className="search-box">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    className="clear-search"
                    onClick={() => setSearchQuery('')}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                )}
              </div>
            </div>

            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <motion.div 
              className="gallery-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {filteredImages.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="image-container">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h3>{item.title}</h3>
                        <p>{item.location}</p>
                        <span className="category-tag">{item.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>No images found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                className="btn-clear"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            tabIndex="-1"
          >
            <div className="lightbox-container">
              <button 
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              
              <button 
                className="lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              
              <div className="lightbox-content">
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    onLoad={() => setIsLoading(false)}
                  />
                )}
                <div className="lightbox-info">
                  <h3>{selectedImage.title}</h3>
                  <p className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {selectedImage.location}
                  </p>
                  <span className="category">{selectedImage.category}</span>
                </div>
              </div>
              
              <button 
                className="lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              
              <div className="lightbox-counter">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
