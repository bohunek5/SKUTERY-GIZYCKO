import { setRequestLocale } from 'next-intl/server';
import Contact from '@/components/Contact';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Contact />
    </main>
  );
}
