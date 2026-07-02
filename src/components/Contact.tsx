/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from 'next-intl';
import styles from './Contact.module.scss';
import { MapPin, Phone, Mail, Navigation, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Contact() {
  const t = useTranslations('Contact');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen && e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.infoSide}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">{t('subtitle')}</span>
          <h2>{t('title')}</h2>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <MapPin size={24} />
              </div>
              <div>
                <h4>{t('addressTitle')}</h4>
                <p><a href="https://maps.google.com/?q=Pierkunowo+36,+11-500+Giżycko" target="_blank" rel="noopener noreferrer">{t('address')}</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <Phone size={24} />
              </div>
              <div>
                <h4>{t('phoneTitle')}</h4>
                <p><a href={`tel:${t('phone').replace(/\s+/g, '')}`}>{t('phone')}</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <Mail size={24} />
              </div>
              <div>
                <h4>{t('emailTitle')}</h4>
                <p><a href={`mailto:${t('email')}`}>{t('email')}</a></p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.visualSide}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.mapCard}>
            <iframe 
              src="https://maps.google.com/maps?q=54.052674,21.753303&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>
          <div 
            className={styles.photoCard} 
            onClick={() => setIsLightboxOpen(true)}
            tabIndex={0}
            role="button"
            aria-label="Open photo gallery"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsLightboxOpen(true);
              }
            }}
          >
            <img src="/SKUTERY-GIZYCKO/images/tu-jestesmy.jpg" alt="Tutaj nas znajdziesz w porcie" />
            <div className={styles.photoLabel}>
              <Navigation size={18} className="text-primary" /> TU JESTEŚMY
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <button className={styles.closeButton} onClick={() => setIsLightboxOpen(false)}>
              <X size={32} />
            </button>
            <motion.img 
              src="/SKUTERY-GIZYCKO/images/tu-jestesmy.jpg" 
              alt="Tu jesteśmy" 
              className={styles.lightboxImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
