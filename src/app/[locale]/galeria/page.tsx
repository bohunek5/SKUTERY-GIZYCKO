import { setRequestLocale } from 'next-intl/server';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title="Galeria" 
        subtitle="Zobacz, jak wygląda prawdziwa przygoda na Mazurach" 
        videoSrc="/SKUTERY-GIZYCKO/assets/galeria-hero.mp4" 
        ctaText="Zarezerwuj sprzęt" 
        ctaLink="/kontakt" 
      />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Gallery />
      </div>
    </main>
  );
}
