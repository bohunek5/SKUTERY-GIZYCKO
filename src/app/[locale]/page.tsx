
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Fleet from '@/components/Fleet';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Fleet />
      <HowItWorks />
      <About />
    </main>
  );
}
