import { setRequestLocale, getTranslations } from 'next-intl/server';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('GalleryPage');

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title={t('title')} 
        subtitle={t('subtitle')} 
        videoSrc="/SKUTERY-GIZYCKO/videos/galeria-hero.mp4" 
        compact={true}
        showArrowDown={true}
      />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Gallery />
      </div>
    </main>
  );
}
