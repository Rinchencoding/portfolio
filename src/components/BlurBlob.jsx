// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const BlurBlob = ({ position, size, color = 'bg-purple-500', duration = 22 }) => {
  // Destructure position and size with default values
  const { top, left } = position
  const { width, height } = size

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.div
        className={`h-full w-full rounded-full ${color} opacity-20 blur-3xl animate-blob`}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 25, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
  duration: PropTypes.number,
};

export default BlurBlob;
