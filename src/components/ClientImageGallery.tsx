"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ClientImageGallery.module.scss';

interface ClientImageGalleryProps {
  images: string[];
  name: string;
}

export default function ClientImageGallery({ images, name }: ClientImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      else if (e.key === 'ArrowLeft') setSelectedIndex(prev => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      else if (e.key === 'ArrowRight') setSelectedIndex(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    };

    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className={styles.galleryLayout}>
        {/* Desktop Grid Layout */}
        <div className={styles.desktopGrid}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`${styles.gridItem} ${idx === 0 ? styles.featured : ''}`}
              onClick={() => setSelectedIndex(idx)}
              role="button"
              tabIndex={0}
            >
              <img src={img} alt={`${name} - Zdjęcie ${idx + 1}`} loading="lazy" />
              <div className={styles.overlay}>
                <span>Powiększ</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Snap Slider Layout */}
        <div className={styles.mobileSlider} ref={sliderRef}>
          {images.map((img, idx) => (
            <div 
              key={`mob-${idx}`}
              className={styles.slideItem}
              onClick={() => setSelectedIndex(idx)}
            >
              <img src={img} alt={`${name} - Zdjęcie ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className={styles.swipeHint}>
          Przesuń, aby zobaczyć więcej zdjęć &rarr;
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)} aria-label="Zamknij">
              <X size={32} />
            </button>
            <button 
              className={`${styles.navBtn} ${styles.prevBtn}`} 
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => (prev !== null && prev > 0 ? prev - 1 : images.length - 1)); }}
              aria-label="Poprzednie"
            >
              <ChevronLeft size={40} />
            </button>
            
            <div className={styles.lightboxImgContainer} onClick={(e) => e.stopPropagation()}>
              <motion.img 
                key={selectedIndex}
                src={images[selectedIndex]} 
                alt="Enlarged view" 
                className={styles.lightboxImg}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              />
              <div className={styles.imgCounter}>
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
            
            <button 
              className={`${styles.navBtn} ${styles.nextBtn}`} 
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : 0)); }}
              aria-label="Następne"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
