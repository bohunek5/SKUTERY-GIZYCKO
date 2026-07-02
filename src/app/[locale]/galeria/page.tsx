import { setRequestLocale } from 'next-intl/server';
import Gallery from '@/components/Gallery';

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Gallery />
    </main>
  );
}
