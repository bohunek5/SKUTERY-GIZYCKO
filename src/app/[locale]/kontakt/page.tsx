import { setRequestLocale, getTranslations } from 'next-intl/server';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ContactPage');

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title={t('title')} 
        subtitle={t('subtitle')} 
        videoSrc="/SKUTERY-GIZYCKO/videos/kontakt-hero.mp4" 
        compact={true}
        showArrowDown={true}
      />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Contact />
      </div>
    </main>
  );
}
