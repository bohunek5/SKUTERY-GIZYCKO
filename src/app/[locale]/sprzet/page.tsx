import { setRequestLocale, getTranslations } from 'next-intl/server';
import Fleet from '@/components/Fleet';
import Hero from '@/components/Hero';
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
  const t = await getTranslations('Navigation'); // Or use another namespace if preferred for title

  return (
    <main className={styles.main}>
      <Hero 
        title="Sprzęt" 
        subtitle="Nasza oferta" 
        videoSrc="/SKUTERY-GIZYCKO/videos/oferta.mp4" 
        compact={true}
        showArrowDown={true}
      />

      <div style={{ background: 'var(--bg-primary)' }}>
        <Fleet />
      </div>
    </main>
  );
}
