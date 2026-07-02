import { setRequestLocale } from 'next-intl/server';
import HowItWorks from '@/components/HowItWorks';

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-base)' }}>
      <HowItWorks />
    </main>
  );
}
