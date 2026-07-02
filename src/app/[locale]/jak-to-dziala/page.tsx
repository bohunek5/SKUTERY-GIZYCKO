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
        videoSrc="/SKUTERY-GIZYCKO/videos/jak-to-dziala.mp4" 
        showArrowDown={true}
      />
      <div style={{ paddingBottom: '80px', position: 'relative', zIndex: 10 }}>
        <HowItWorks />
      </div>
    </main>
  );
}
