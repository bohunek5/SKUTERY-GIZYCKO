import { setRequestLocale, getTranslations } from 'next-intl/server';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title={t('title')} 
        subtitle={t('subtitle')} 
        videoSrc="/SKUTERY-GIZYCKO/videos/kontakt.mp4" 
        showArrowDown={true}
      />
      <div style={{ marginTop: '-60px', paddingBottom: '80px', position: 'relative', zIndex: 10 }}>
        <Contact />
      </div>
    </main>
  );
}
