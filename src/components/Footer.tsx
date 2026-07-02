/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './Footer.module.scss';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('Footer');
  const tContact = useTranslations('Contact');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.col}>
            <div className={styles.brand}>
              <img src="/SKUTERY-GIZYCKO/assets/skutery-logo.svg" alt="Jet Ski Rental Maciej Skwarko" className="logo-invert" />
              <p>{t('tagline')}</p>
            </div>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/jetskirental.skutery.gizycko" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaFacebook size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.col}>
            <h3>{t('quickLinks')}</h3>
            <ul className={styles.linksList}>
              <li><Link href="/">{useTranslations('Navigation')('home')}</Link></li>
              <li><Link href="/o-nas">{useTranslations('Navigation')('about')}</Link></li>
              <li><Link href="/sprzet">{useTranslations('Navigation')('fleet')}</Link></li>
              <li><Link href="/galeria">{useTranslations('Navigation')('gallery')}</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.col}>
            <h3>{t('contactUs')}</h3>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>{tContact('address')}</span>
              </li>
              <li>
                <FaPhoneAlt className={styles.contactIcon} />
                <a href={`tel:${tContact('phone').replace(/\s+/g, '')}`}>{tContact('phone')}</a>
              </li>
              <li>
                <FaEnvelope className={styles.contactIcon} />
                <a href={`mailto:${tContact('email')}`}>{tContact('email')}</a>
              </li>
            </ul>
          </div>

          {/* Places to see */}
          <div className={styles.col}>
            <h3>Warto zobaczyć z wody</h3>
            <ul className={styles.linksList}>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Port+Stranda+Giżycko" target="_blank" rel="noopener noreferrer">Port Stranda (baza)</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Kanał+Łuczański+Giżycko" target="_blank" rel="noopener noreferrer">Kanał Giżycki (Łuczański)</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Wyspa+Miłości+Jezioro+Niegocin" target="_blank" rel="noopener noreferrer">Wyspa Miłości (Niegocin)</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Jezioro+Kisajno" target="_blank" rel="noopener noreferrer">Szlak Łabędzi (Kisajno)</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Twierdza+Boyen+Giżycko" target="_blank" rel="noopener noreferrer">Twierdza Boyen (z wody)</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t('copyright', { year })}</p>
        </div>
      </div>
    </footer>
  );
}
