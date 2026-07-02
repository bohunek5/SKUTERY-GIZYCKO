import { setRequestLocale, getTranslations } from 'next-intl/server';
import About from '@/components/About';
import Hero from '@/components/Hero';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title={t('title')} 
        subtitle={t('subtitle')} 
        videoSrc="/SKUTERY-GIZYCKO/videos/o-nas.mp4" 
        showArrowDown={true}
      />
      <div style={{ marginTop: '-60px', paddingBottom: '80px', position: 'relative', zIndex: 10 }}>
        <About />
      </div>
    </main>
  );
}
