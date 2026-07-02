"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './ScooterSlider.module.scss';

interface ScooterSliderProps {
  images: string[];
}

export default function ScooterSlider({ images }: ScooterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    };

    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images.length]);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.mainView} onClick={() => setIsLightboxOpen(true)} style={{ cursor: 'pointer' }}>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <button 
              onClick={() => setIsLightboxOpen(false)} 
              aria-label="Close"
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10000 }}
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={prevImage}
              aria-label="Previous image"
              style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10000 }}
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt="Enlarged gallery view" 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
            />

            <button 
              onClick={nextImage}
              aria-label="Next image"
              style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10000 }}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
