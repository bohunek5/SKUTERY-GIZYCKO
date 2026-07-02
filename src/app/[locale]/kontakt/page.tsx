import { setRequestLocale } from 'next-intl/server';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title="Kontakt" 
        subtitle="Masz pytania? Chcesz zarezerwować sprzęt? Skontaktuj się z nami!" 
        videoSrc="/SKUTERY-GIZYCKO/assets/kontakt-hero.mp4" 
        ctaText="Odwiedź nas w porcie" 
        ctaLink="#map" 
      />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Contact />
      </div>
    </main>
  );
}
