"use client";

import { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa6';
import styles from './ClientMobileBookingBar.module.scss';

interface Props {
  scooterName: string;
  pricePerHour: string;
}

export default function ClientMobileBookingBar({ scooterName, pricePerHour }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling past the hero (roughly 80% of viewport height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.mobileBookingBar} ${visible ? styles.visible : ''}`}>
      <div className={styles.mobilePriceInfo}>
        <span className={styles.priceLabel}>Wynajem: {scooterName}</span>
        <div className={styles.priceValue}>od {pricePerHour.replace('*', '')}</div>
      </div>
      <a href="tel:+48507697292" className={`btn-primary ${styles.mobileBookBtn}`}>
        <FaPhone /> Zadzwoń
      </a>
    </div>
  );
}
