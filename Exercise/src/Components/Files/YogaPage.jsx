import React from 'react';
import { motion } from 'framer-motion';
import './YogaPage.css';

const YogaPage = () => {
  return (
    <div className="landing-container">
      <div className="background-image">
        {/* Background overlay handled in CSS */}
      </div>
      
      <div className="content-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="content-wrapper"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="main-heading"
          >
            EMBRACE INNER PEACE
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="subtitle"
          >
            <p>Journey to Mindfulness</p>
            <p className="highlight">Transform Body, Mind & Spirit</p>
          </motion.div>

          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Begin Your Practice
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="decorative-elements"
      >
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
      </motion.div>
    </div>
  );
};

export default YogaPage;