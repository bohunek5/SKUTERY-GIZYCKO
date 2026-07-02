
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import Fleet from '@/components/Fleet';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Hero' });

  return (
    <main>
      <Hero 
        title={t('title')} 
        subtitle={t('subtitle')} 
        imageSrc="https://skutery-gizycko.pl/wp-content/uploads/2021/02/20200630_204451-scaled.jpg"
        showArrowDown={true}
      />
      <Fleet />
      <HowItWorks />
      <About />
    </main>
  );
}
