"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ScooterSlider.module.scss';

interface ScooterSliderProps {
  images: string[];
}

export default function ScooterSlider({ images }: ScooterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.mainView}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.mainImage}
          />
        </AnimatePresence>
        
        {images.length > 1 && (
          <>
            <button className={`${styles.navButton} ${styles.prev}`} onClick={prevImage}>
              <ChevronLeft size={32} />
            </button>
            <button className={`${styles.navButton} ${styles.next}`} onClick={nextImage}>
              <ChevronRight size={32} />
            </button>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className={styles.thumbnailContainer}>
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
