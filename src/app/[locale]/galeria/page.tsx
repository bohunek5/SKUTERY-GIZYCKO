import { setRequestLocale, getTranslations } from 'next-intl/server';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Gallery');

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Hero 
        title={t('title')} 
        subtitle={t('subtitle')} 
        showArrowDown={true}
      />
      <div style={{ marginTop: '-60px', paddingBottom: '80px', position: 'relative', zIndex: 10 }}>
        <Gallery />
      </div>
    </main>
  );
}
