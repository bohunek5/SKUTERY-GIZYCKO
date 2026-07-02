import { setRequestLocale } from 'next-intl/server';
import About from '@/components/About';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-base)' }}>
      <About />
    </main>
  );
}
