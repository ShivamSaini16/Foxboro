import React, { useState, useEffect } from 'react';




function ImageSlider() {
  const images = [
    'auto.jpg',
    'mation.gif',
    'noData.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length])

  return (
    <div className="relative w-full h-56  overflow-hidden">
       <h2 className="text-lg font-semibold pl-1 text-gray-600"> Product Promotional</h2>
       <p className="text-gray-500 pl-1 mb-2">Company Name Sensor China</p>
      {images.map((image, index) => (
        <img
          key={index} // Add a key for each element to prevent React warnings
          src={image} // Set the image source
          alt={`Slide ${index + 1}`} // Descriptive alt text
          className={`absolute w-full h-full object-cover transirio-tranform duration-500
      ${index === currentIndex ? 'translate-x-0' : 'translate-x-12'}`} // Image styling
          style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
        />
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

