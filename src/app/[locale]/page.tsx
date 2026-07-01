
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Fleet from '@/components/Fleet';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Hero');

  return (
    <main>
      <Hero />
      <About />
      <Fleet />
      <HowItWorks />
      <Gallery />
      <Contact />
    </main>
  );
}
