import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Banner = () => {
  const images = [
    { src: 'automation.jpg', alt: 'Banner 1' },
    { src: 'auto.jpg', alt: 'Banner 2' },
    { src: 'mation.gif', alt: 'Banner 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative flex justify-center items-center p-4 space-x-4 w-screen">
      <IconButton onClick={handlePrev} className="absolute left-0 z-10">
        <ArrowBackIosIcon />
      </IconButton>
      <div className="w-screen h-80"> {/* Full width of the viewport */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover" 
        />
      </div>
      <IconButton onClick={handleNext} className="absolute right-0 z-10">
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default Banner;
