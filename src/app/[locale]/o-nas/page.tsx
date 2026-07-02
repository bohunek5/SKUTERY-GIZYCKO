import { setRequestLocale } from 'next-intl/server';
import About from '@/components/About';
import Hero from '@/components/Hero';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title="O nas" 
        subtitle="Poznaj naszą historię i pasję do sportów wodnych" 
        videoSrc="/SKUTERY-GIZYCKO/assets/o-nas-hero.mp4" 
        ctaText="Zobacz nasz sprzęt" 
        ctaLink="/sprzet" 
      />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <About />
      </div>
    </main>
  );
}
