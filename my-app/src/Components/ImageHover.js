import React, { useState } from 'react';
import './ImageHover.css';

const ImageHover = ({ primarySrc, secondarySrc, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
    >
      <div className="hover-images">
        <img src={primarySrc} alt="Primary" className="primary-image" />
        <img src={secondarySrc} alt="Secondary" className="secondary-image" />
      </div>
    </div>
  );
};

export default ImageHover;
