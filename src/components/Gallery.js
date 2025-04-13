import React, { useEffect } from 'react';
import Masonry  from 'react-masonry-css';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Gallery.css';

// Image imports
import gallery1 from '../assets/gallery1.webp';
import gallery2 from '../assets/gallery2.webp';
import gallery3 from '../assets/gallery3.webp';
import gallery4 from '../assets/gallery4.webp';
import gallery5 from '../assets/gallery5.webp';
import gallery6 from '../assets/gallery6.webp';
import gallery7 from '../assets/gallery7.webp';
import gallery8 from '../assets/gallery8.webp';
import gallery9 from '../assets/gallery9.webp';
import gallery10 from '../assets/gallery10.webp';
import gallery11 from '../assets/gallery11.webp';
import gallery12 from '../assets/gallery12.webp';
import gallery13 from '../assets/gallery13.webp';
import gallery14 from '../assets/gallery14.webp';
import gallery15 from '../assets/gallery15.webp';
import gallery16 from '../assets/gallery16.webp';
import navarasa1 from '../assets/navarasa1.webp';
import navarasa2 from '../assets/navarasa2.webp';
import navarasa3 from '../assets/navarasa3.webp';
import navarasa4 from '../assets/navarasa4.webp';
import navarasa5 from '../assets/navarasa5.webp';
import navarasa6 from '../assets/navarasa6.webp';
import navarasa7 from '../assets/navarasa7.webp';
import rangotsavam2023_1 from '../assets/rangotsavam2023_1.webp';
import rangotsavam2023_2 from '../assets/rangotsavam2023_2.webp';
import rangotsavam2023_3 from '../assets/rangotsavam2023_3.webp';
import rangotsavam2023_4 from '../assets/rangotsavam2023_4.webp';
import rangotsavam2023_5 from '../assets/rangotsavam2023_5.webp';
import rangotsavam2023_6 from '../assets/rangotsavam2023_6.webp';
import rangotsavam2023_7 from '../assets/rangotsavam2023_7.webp';
import rangotsavam2024_1 from '../assets/rangotsavam2024_1.webp';
import rangotsavam2024_2 from '../assets/rangotsavam2024_2.webp';
import rangotsavam2024_3 from '../assets/rangotsavam2024_3.webp';
import rangotsavam2024_4 from '../assets/rangotsavam2024_4.webp';
import rangotsavam2024_5 from '../assets/rangotsavam2024_5.webp';
import rangotsavam2024_6 from '../assets/rangotsavam2024_6.webp';
import rangotsavam2024_7 from '../assets/rangotsavam2024_7.webp';
import rangotsavam2024_8 from '../assets/rangotsavam2024_8.webp';
import rangotsavam2024_9 from '../assets/rangotsavam2024_9.webp';
import al4s_1 from '../assets/al4s_1.webp';
import digital2023_1 from '../assets/digital2023_1.webp';
import digital2023_2 from '../assets/digital2023_2.webp';
import digital2023_3 from '../assets/digital2023_3.webp';
import digital2023_4 from '../assets/digital2023_4.webp';
import digital2024_1 from '../assets/digital2024_1.webp';
import digital2024_2 from '../assets/digital2024_2.webp';
import digital2024_3 from '../assets/digital2024_3.webp';
import digital2024_4 from '../assets/digital2024_4.webp';
import digital2024_5 from '../assets/digital2024_5.webp';
import digital2024_6 from '../assets/digital2024_6.webp';
import krishnajanmastami1 from '../assets/krishnajanmastami1.webp';
import krishnajanmastami2 from '../assets/krishnajanmastami2.webp';
import krishnajanmastami3 from '../assets/krishnajanmastami3.webp';
import krishnajanmastami4 from '../assets/krishnajanmastami4.webp';
import krishnajanmastami5 from '../assets/krishnajanmastami5.webp';
import republicday1 from '../assets/republicday1.webp';
import republicday2 from '../assets/republicday2.webp';
import republicday3 from '../assets/republicday3.webp';
import republicday4 from '../assets/republicday4.webp';
import republicday5 from '../assets/republicday5.webp';
import solo1 from '../assets/solo1.webp';
import solo2 from '../assets/solo2.webp';
import solo3 from '../assets/solo3.webp';
import solo4 from '../assets/solo4.webp';
import solo5 from '../assets/solo5.webp';
import solo6 from '../assets/solo6.webp';
import solo7 from '../assets/solo7.webp';
import vadakkum2023_1 from '../assets/vadakkum2023_1.webp';
import yuvadasara_1 from '../assets/yuvadasara_1.webp';

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8,
  gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16,
  navarasa1, navarasa2, navarasa3, navarasa4, navarasa5, navarasa6, navarasa7,
  rangotsavam2023_1, rangotsavam2023_2, rangotsavam2023_3, rangotsavam2023_4,
  rangotsavam2023_5, rangotsavam2023_6, rangotsavam2023_7, rangotsavam2024_1,
  rangotsavam2024_2, rangotsavam2024_3, rangotsavam2024_4, rangotsavam2024_5,
  rangotsavam2024_6, rangotsavam2024_7, rangotsavam2024_8, rangotsavam2024_9,
  al4s_1, digital2023_1, digital2023_2, digital2023_3, digital2023_4, digital2024_1,
  digital2024_2, digital2024_3, digital2024_4, digital2024_5, digital2024_6,
  krishnajanmastami1, krishnajanmastami2, krishnajanmastami3, krishnajanmastami4,
  krishnajanmastami5, republicday1, republicday2, republicday3, republicday4,
  republicday5, solo1, solo2, solo3, solo4, solo5, solo6, solo7, vadakkum2023_1,
  yuvadasara_1
];

function Gallery() {
  const { scrollYProgress } = useScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    document.title = "Gallery | Bharostanatyam";
  }, []);

    const breakpoints = {
      default: 4,
      1600: 4,
      1200: 3,
      900: 2,
      600: 1,
    };
  
    return (
      <div className="gallery-container">
        {/* New animated background elements */}
        <div className="background-wrapper">
          <motion.div 
            className="bg-circle-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <motion.div 
            className="bg-circle-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
        </div>
  
        <h1>Gallery</h1>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                zIndex: 1,
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
                transition: { duration: 0.3 }
              }}
            >
              <div className="gallery-item">
                <img 
                  src={image} 
                  alt={`Gallery item ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    );
  }
  
  export default Gallery;

