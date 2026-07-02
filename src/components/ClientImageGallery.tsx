"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ClientImageGallery.module.scss';

interface ClientImageGalleryProps {
  images: string[];
  name: string;
}

export default function ClientImageGallery({ images, name }: ClientImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      else if (e.key === 'ArrowLeft') setSelectedIndex(prev => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      else if (e.key === 'ArrowRight') setSelectedIndex(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    };

    if (selectedIndex !== null) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className={styles.imageGrid}>
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`${styles.galleryImgWrapper} ${idx === 0 ? styles.featured : ''}`}
            onClick={() => setSelectedIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedIndex(idx);
              }
            }}
          >
            <img src={img} alt={`${name} - Zdjęcie ${idx + 1}`} className={styles.galleryImg} />
            <div className={styles.overlay}></div>
          </div>
        ))}
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
            <button className={styles.closeButton} onClick={() => setSelectedIndex(null)} aria-label="Close">
              <X size={32} />
            </button>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`} 
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => (prev !== null && prev > 0 ? prev - 1 : images.length - 1)); }}
              aria-label="Previous"
            >
              <ChevronLeft size={48} />
            </button>
            <motion.img 
              key={selectedIndex}
              src={images[selectedIndex]} 
              alt="Enlarged view" 
              className={styles.lightboxImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className={`${styles.navButton} ${styles.nextButton}`} 
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : 0)); }}
              aria-label="Next"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
