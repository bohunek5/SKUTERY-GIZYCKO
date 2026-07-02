import { setRequestLocale } from 'next-intl/server';
import HowItWorks from '@/components/HowItWorks';
import Hero from '@/components/Hero';

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title="Jak to działa?" 
        subtitle="Proces wynajmu krok po kroku. To prostsze niż myślisz!" 
        videoSrc="/SKUTERY-GIZYCKO/videos/oferta.mp4" 
        compact={true}
        showArrowDown={true}
      />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <HowItWorks />
      </div>
    </main>
  );
}
