// src/components/ProgressiveImage.jsx
import React, { useState, useEffect } from "react";

const ProgressiveImage = ({ lowResSrc, highResSrc, alt, className, style }) => {
  const [currentSrc, setCurrentSrc] = useState(lowResSrc);
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = highResSrc;
    img.onload = () => {
      setCurrentSrc(highResSrc);
      setIsHighResLoaded(true);
    };
  }, [highResSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={{
        transition: "opacity 0.5s ease-in-out",
        opacity: isHighResLoaded ? 1 : 0.7,
        ...style,
      }}
    />
  );
};

export default ProgressiveImage;
