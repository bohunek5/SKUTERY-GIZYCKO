/* eslint-disable @next/next/no-img-element */
"use client";
'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import styles from './Navigation.module.scss';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import WeatherWidget from './WeatherWidget';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/" onClick={(e) => {
            if (window.location.pathname === '/' || window.location.pathname === '/pl' || window.location.pathname === '/en' || window.location.pathname === '/de' || window.location.pathname === '/lt') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}>
            <img src="/SKUTERY-GIZYCKO/assets/skutery-logo.svg" alt="Jet Ski Rental Maciej Skwarko" className="logo-invert" style={{ cursor: 'pointer' }} />
          </Link>
        </div>

        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`${styles.links} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuLogo}>
            <Link href="/" onClick={(e) => {
              setMobileMenuOpen(false);
              if (window.location.pathname === '/' || window.location.pathname === '/pl' || window.location.pathname === '/en' || window.location.pathname === '/de' || window.location.pathname === '/lt') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }} style={{ display: 'block' }}>
              <img src="/SKUTERY-GIZYCKO/assets/skutery-logo.svg" alt="Jet Ski Rental Maciej Skwarko" className="logo-invert" style={{ cursor: 'pointer' }} />
            </Link>
          </div>
          <Link href="/o-nas" onClick={() => setMobileMenuOpen(false)}>{t('about')}</Link>
          <Link href="/sprzet" onClick={() => setMobileMenuOpen(false)}>{t('fleet')}</Link>
          <Link href="/jak-to-dziala" onClick={() => setMobileMenuOpen(false)}>{t('howItWorks')}</Link>
          <Link href="/galeria" onClick={() => setMobileMenuOpen(false)}>{t('gallery')}</Link>
          <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>{t('contact')}</Link>
          
          <div className={styles.mobileActions}>
            <div className={styles.mobileControls}>
              <WeatherWidget compact={true} />
              <ThemeToggle compact={true} />
              <LanguageSwitcher compact={true} />
            </div>
            <Link href="/kontakt" className="btn-primary" style={{ color: '#ffffff' }} onClick={() => setMobileMenuOpen(false)}>{t('bookNow')}</Link>
          </div>
        </div>

        <div className={styles.desktopActions}>
          <WeatherWidget />
          <ThemeToggle />
          <LanguageSwitcher />
          <Link href="/kontakt" className="btn-primary">{t('bookNow')}</Link>
        </div>
      </div>
    </nav>
  );
}
