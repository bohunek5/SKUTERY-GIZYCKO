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
          <Link href="/">
            <img src="/SKUTERY-GIZYCKO/assets/skutery-logo.svg" alt="Jet Ski Rental Maciej Skwarko" className="logo-invert" />
          </Link>
        </div>

        <div className={styles.mobileTopBarControls}>
          <div className={styles.weatherMini}>
            <WeatherWidget compact={true} />
          </div>
          <LanguageSwitcher compact={true} />
          <ThemeToggle compact={true} />
          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`${styles.links} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuLogo}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block' }}>
              <img src="/SKUTERY-GIZYCKO/assets/skutery-logo.svg" alt="Jet Ski Rental Maciej Skwarko" className="logo-invert" />
            </Link>
          </div>
          <Link href="/o-nas" onClick={() => setMobileMenuOpen(false)}>{t('about')}</Link>
          <Link href="/sprzet" onClick={() => setMobileMenuOpen(false)}>{t('fleet')}</Link>
          <Link href="/jak-to-dziala" onClick={() => setMobileMenuOpen(false)}>{t('howItWorks')}</Link>
          <Link href="/galeria" onClick={() => setMobileMenuOpen(false)}>{t('gallery')}</Link>
          <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>{t('contact')}</Link>
          
          <div className={styles.mobileActions}>
            <Link href="/kontakt" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>{t('bookNow')}</Link>
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
