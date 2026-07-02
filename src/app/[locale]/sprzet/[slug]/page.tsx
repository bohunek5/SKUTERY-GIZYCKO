/* eslint-disable @next/next/no-img-element */
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { scootersData } from '@/data/scooters';
import styles from './page.module.scss';
import { FaTachometerAlt, FaUsers, FaWeightHanging, FaArrowsAltH, FaArrowLeft, FaPhone } from 'react-icons/fa';
import { Link } from '@/i18n/routing';
import ScooterSlider from '@/components/ScooterSlider';

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'Fleet' });
  if (!scootersData[slug]) return { title: 'Not Found' };
  
  return {
    title: `${t(`items.${slug}.name`)} - Jet Ski Rental Maciej Skwarko`,
    description: `Wypożycz ${t(`items.${slug}.name`)} w Giżycku.`
  };
}

export function generateStaticParams() {
  const locales = ['pl', 'en', 'de', 'lt'];
  const params: any[] = [];
  locales.forEach((locale) => {
    Object.keys(scootersData).forEach((slug) => {
      params.push({ locale, slug });
    });
  });
  return params;
}

export default async function ScooterPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const scooter = scootersData[slug];
  if (!scooter) {
    notFound();
  }

  const t = await getTranslations('Fleet');
  const name = t(`items.${slug}.name`);
  const type = t(`items.${slug}.type`);

  return (
    <main className={styles.main}>
      
      <div className={styles.heroSection}>
        <div className={styles.heroBg}>
          <video autoPlay muted loop playsInline className={styles.bgImg} style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
            <source src="/SKUTERY-GIZYCKO/videos/sprzet.mp4" type="video/mp4" />
          </video>
          <div className={styles.overlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <Link href="/sprzet" className={styles.backBtn}>
            <FaArrowLeft /> Wróć do floty
          </Link>
          <div className={styles.titleWrapper}>
            <h1>{name}</h1>
            <span className={styles.typeBadge}>{type}</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.contentSection}`}>
        <div className={styles.grid}>
          {/* Left Column: Details & Specs */}
          <div className={styles.details}>
            <div className={styles.descriptionCard}>
              <h2>Opis sprzętu</h2>
              <p>{scooter.description}</p>
            </div>
            
            <h2 className={styles.specsTitle}>Specyfikacja Techniczna</h2>
            <div className={styles.specsGrid}>
              <div className={styles.specCard}>
                <div className={styles.iconBox}><FaTachometerAlt /></div>
                <div className={styles.specInfo}>
                  <span className={styles.label}>Prędkość max / Moc</span>
                  <span className={styles.value}>{scooter.maxSpeed} / {scooter.horsepower}</span>
                </div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.iconBox}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>PLN</span>
                </div>
                <div className={styles.specInfo}>
                  <span className={styles.label}>Cena wynajmu</span>
                  <span className={styles.value}>{scooter.pricePerHour} / godz. <br/> {scooter.pricePerDay} / dzień</span>
                </div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.iconBox}><FaUsers /></div>
                <div className={styles.specInfo}>
                  <span className={styles.label}>Pojemność</span>
                  <span className={styles.value}>{scooter.capacity}</span>
                </div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.iconBox}><FaArrowsAltH /></div>
                <div className={styles.specInfo}>
                  <span className={styles.label}>Długość</span>
                  <span className={styles.value}>{scooter.length}</span>
                </div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.iconBox}><FaWeightHanging /></div>
                <div className={styles.specInfo}>
                  <span className={styles.label}>Waga {scooter.fuelTank && "/ Zbiornik"}</span>
                  <span className={styles.value}>{scooter.weight} {scooter.fuelTank && `/ ${scooter.fuelTank}`}</span>
                </div>
              </div>
            </div>

            {scooter.rules && scooter.rules.length > 0 && (
              <div className={styles.rulesCard}>
                <h2>Dodatkowe Informacje</h2>
                <ul className={styles.rulesList}>
                  {scooter.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.actions}>
              <a href="tel:+48507697292" className="btn-primary">
                <FaPhone style={{ marginRight: '8px' }} /> Zadzwoń i zarezerwuj
              </a>
            </div>
          </div>

          {/* Right Column: Gallery */}
          <div className={styles.gallery}>
            <ScooterSlider images={scooter.gallery} />
          </div>
        </div>
      </div>
    </main>
  );
}
