import React, { useState, useEffect } from 'react';
import './Home.css'; // Stylesheet for Carousel
import image1 from './images/image1.jpg'; 
import image2 from './images/image2.jpg'; 
import image3 from './images/image3.jpg'; 
import image4 from './images/image4.jpg'; 
import image5 from './images/image5.jpg'; 
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image URLs
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5
  ];

  // Function to handle automatic image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className='images'/>
        ))}
      </div>

    </div>
  );
};

export default Carousel;
