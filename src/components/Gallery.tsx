/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from 'next-intl';
import styles from './Gallery.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/SKUTERY-GIZYCKO/assets/20240630_105901-scaled.jpg',
  '/SKUTERY-GIZYCKO/assets/20240705_150810-scaled.jpg',
  '/SKUTERY-GIZYCKO/assets/20240601_185516-scaled.jpg',
  '/SKUTERY-GIZYCKO/assets/20240528_122529-scaled.jpg',
  '/SKUTERY-GIZYCKO/assets/20200611_213441-scaled.jpg',
  '/SKUTERY-GIZYCKO/assets/20190805_200721-scaled.jpg'
];

export default function Gallery() {
  const t = useTranslations('Gallery');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex(prev => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className={`container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">{t('subtitle')}</span>
          <h2>{t('title')}</h2>
        </motion.div>

        <div className={styles.grid}>
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              className={styles.imageItem}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              tabIndex={0}
              role="button"
              aria-label={`View image ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
            >
              <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" />
              <div className={styles.overlay}></div>
            </motion.div>
          ))}
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
            <button className={styles.closeButton} onClick={() => setSelectedIndex(null)} aria-label="Close">
              <X size={32} />
            </button>
            
            <button 
              className={`${styles.navButton} ${styles.prevButton}`} 
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => (prev !== null && prev > 0 ? prev - 1 : images.length - 1)); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img 
              key={selectedIndex}
              src={images[selectedIndex]} 
              alt="Enlarged gallery view" 
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
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
