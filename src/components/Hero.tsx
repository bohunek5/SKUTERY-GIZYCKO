"use client";
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Hero.module.scss';
import { motion, Variants } from 'framer-motion';

import { Link } from '@/i18n/routing';
import { ChevronDown } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    scale: 1, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
  }
};

const actionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

interface HeroProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  imageSrc?: string;
  posterSrc?: string;
  ctaText?: string;
  ctaLink?: string;
  compact?: boolean;
  showArrowDown?: boolean;
}

export default function Hero({ title, subtitle, videoSrc, imageSrc, posterSrc, ctaText, ctaLink, compact = false, showArrowDown = false }: HeroProps) {
  const t = useTranslations('Hero');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force play to ensure it doesn't get stuck on some browsers/React hydration
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log('Autoplay prevented:', e));
      }
    }
  }, [videoSrc]);

  const finalTitle = title || t('title');
  const finalSubtitle = subtitle || t('subtitle');
  // Use image by default instead of heavy 86MB video to prevent mobile lag
  const finalImageSrc = imageSrc || (!videoSrc ? "https://skutery-gizycko.pl/wp-content/uploads/2021/02/20200630_204451-scaled.jpg" : undefined);
  // Re-enable dynamically generated posters for all videos to prevent iOS missing-play-icon bug
  const generatedPoster = videoSrc ? videoSrc.split('?')[0].replace('.mp4', '.png').replace('.mov', '.png') + (videoSrc.includes('?') ? '?' + videoSrc.split('?')[1] : '') : undefined;
  const finalPosterSrc = posterSrc || generatedPoster;
  const finalCtaText = ctaText || t('cta');
  const finalCtaLink = ctaLink || "/kontakt";

  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ''}`} id="home">
      {videoSrc && (
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={styles.videoBackground}
            poster={finalPosterSrc}
          >
            <source src={videoSrc} type={videoSrc.includes('.mov') ? 'video/quicktime' : 'video/mp4'} />
          </video>
        </div>
      )}
      {finalImageSrc && !videoSrc && (
        <div className={styles.videoWrapper}>
          <img 
            src={finalImageSrc} 
            alt="Background" 
            className={styles.videoBackground} 
          />
        </div>
      )}
      <div className={styles.overlay}></div>
      
      <motion.div 
        className={`container ${styles.content}`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className={styles.heroTitle} variants={titleVariants}>
          {finalTitle}
        </motion.h1>
        
        <motion.p className={styles.subtitle} variants={subtitleVariants}>
          {finalSubtitle}
        </motion.p>
        
        <motion.div className={styles.actionGroup} variants={actionVariants}>
          {showArrowDown ? (
            <button 
              onClick={(e) => {
                const section = (e.currentTarget as HTMLElement).closest('section');
                const nextSibling = section?.nextElementSibling;
                if (nextSibling) {
                  nextSibling.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }
              }} 
              className={styles.arrowDownBtn}
              aria-label="Scroll down"
            >
              <ChevronDown size={48} />
            </button>
          ) : (
            <>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={finalCtaLink as any} className="btn-primary">{finalCtaText}</Link>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
