import { setRequestLocale, getTranslations } from 'next-intl/server';
import Fleet from '@/components/Fleet';
import styles from './page.module.scss';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return {
    title: `${t('fleet')} - Jet Ski Rental Maciej Skwarko`,
  };
}

export default async function SprzetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <div className={styles.videoWrapper}>
          <video autoPlay muted loop playsInline className={styles.videoBackground}>
            <source src="/SKUTERY-GIZYCKO/videos/oferta.mp4" type="video/mp4" />
          </video>
          <div className={styles.overlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <span className="subtitle" style={{ color: 'white', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Nasza oferta</span>
          <h1>Sprzęt</h1>
        </div>
      </div>

      <div style={{ background: 'var(--bg-primary)', paddingBottom: '60px' }}>
        <Fleet />
      </div>
    </main>
  );
}
