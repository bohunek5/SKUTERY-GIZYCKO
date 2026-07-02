"use client";
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

interface HeroProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  ctaText?: string;
  ctaLink?: string;
  compact?: boolean;
  showArrowDown?: boolean;
}

export default function Hero({ title, subtitle, videoSrc, ctaText, ctaLink, compact, showArrowDown }: HeroProps) {
  const t = useTranslations('Hero');

  const finalTitle = title || t('title');
  const finalSubtitle = subtitle || t('subtitle');
  const finalVideoSrc = videoSrc || "/SKUTERY-GIZYCKO/videos/jetski.mp4";
  const finalCtaText = ctaText || t('cta');
  const finalCtaLink = ctaLink || "/kontakt";

  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ''}`} id="home">
      {finalVideoSrc && (
        <div className={styles.videoWrapper}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoBackground}
            poster={finalVideoSrc.split('?')[0].replace('.mp4', '.png').replace('.mov', '.png') + (finalVideoSrc.includes('?') ? '?' + finalVideoSrc.split('?')[1] : '')}
          >
            <source src={finalVideoSrc} type={finalVideoSrc.includes('.mov') ? 'video/quicktime' : 'video/mp4'} />
          </video>
        </div>
      )}
      <div className={styles.overlay}></div>
      
      <motion.div 
        className={`container ${styles.content}`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className={styles.heroTitle} variants={itemVariants}>
          {finalTitle}
        </motion.h1>
        
        <motion.p className={styles.subtitle} variants={itemVariants}>
          {finalSubtitle}
        </motion.p>
        
        <motion.div className={styles.actionGroup} variants={itemVariants}>
          {showArrowDown ? (
            <button 
              onClick={() => window.scrollBy({ top: window.innerHeight * 0.6, behavior: 'smooth' })} 
              className={styles.arrowDownBtn}
              aria-label="Scroll down"
            >
              <ChevronDown size={48} />
            </button>
          ) : (
            <Link href={finalCtaLink as any} className="btn-primary">{finalCtaText}</Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
