import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { bannerPhoto } from '../Redux/api/service';

// const Banner = () => {


//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [images, setImages] = useState([])

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const response = await bannerPhoto();
//         console.log(response.banner.bannerImg)
//         if (response?.banner[0]?.bannerImg) {
//           setImages(response.banner[0].bannerImg)
//         }
//       } catch (error) {
//         console.error('Failed to fetch banner images:', error);
//       }
//     }
//     fetchBanner();
//   }, [])



//   // Automatically slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, []);

//   return (
//     <div className="relative flex justify-center items-center p-4 space-x-4 w-screen">
//       {/* <IconButton onClick={handlePrev} className="absolute left-0 z-10">
//         <ArrowBackIosIcon />
//       </IconButton> */}
//       <div className="w-screen h-80"> {/* Full width of the viewport */}
//         {images.map((image)=>(
//           <img
//           src={image[currentIndex]}
//           alt={`Banner ${currentIndex + 1}`}
//           className="w-full h-full object-cover"
//         />
//         ))}
//       </div>
//       {/* <IconButton onClick={handleNext} className="absolute right-0 z-10">
//         <ArrowForwardIosIcon />
//       </IconButton> */}
//     </div>
//   );
// };

// export default Banner;


const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Fetch banner images on component mount
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await bannerPhoto();
        console.log(response.banner[0].bannerImg); // Debugging log
        if (response?.banner[0]?.bannerImg) {
          setImages(response.banner[0].bannerImg);
        }
      } catch (error) {
        console.error('Failed to fetch banner images:', error);
      }
    };

    fetchBanner();
  }, []);

  // Automatically slide every 5 seconds
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [images.length]);

  return (
    <div className="relative flex justify-center items-center p-4 space-x-4 w-screen">
      <div className="w-screen h-80">
        {images.length > 0 ? (
          <img
            src={images[currentIndex]}
            alt={`Banner ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex justify-center items-center h-full text-gray-500">
            Loading banners...
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;