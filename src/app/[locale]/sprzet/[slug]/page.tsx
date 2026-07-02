/* eslint-disable @next/next/no-img-element */
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { scootersData } from '@/data/scooters';
import styles from './page.module.scss';
import { FaTachometerAlt, FaUsers, FaWeightHanging, FaArrowsAltH, FaArrowLeft, FaPhone, FaCheckCircle, FaGasPump } from 'react-icons/fa';
import { Link } from '@/i18n/routing';
import ClientImageGallery from '@/components/ClientImageGallery';

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
      
      {/* 1. HERO SECTION (Split on PC, Full with gradient on Mobile) */}
      <section className={styles.heroLayout}>
        <div className={styles.heroContent}>
          <Link href="/sprzet" className={styles.backBtn}>
            <FaArrowLeft /> Wróć do floty
          </Link>

          <div className={styles.textContent}>
            <span className={styles.badge}>{type}</span>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>{scooter.description}</p>
          </div>

          <div className={styles.desktopBookingCard}>
            <div className={styles.priceHeader}>
              <span className={styles.priceLabel}>Wynajem od</span>
              <div className={styles.priceValue}>{scooter.pricePerHour.replace('zł*', '')} <span>PLN / godz.</span></div>
            </div>
            <div className={styles.priceList}>
              <div className={styles.priceRow}>
                <span>1 godzina</span>
                <strong>{scooter.pricePerHour}</strong>
              </div>
              <div className={styles.priceRow}>
                <span>Cały dzień</span>
                <strong>{scooter.pricePerDay}</strong>
              </div>
            </div>
            <a href="tel:+48507697292" className={`btn-primary ${styles.bookBtn}`}>
              <FaPhone /> Zadzwoń i Zarezerwuj
            </a>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <img src={scooter.mainImage} alt={name} className={styles.heroImg} />
          <div className={styles.mobileGradient}></div>
        </div>
      </section>

      {/* MOBILE BOOKING BAR */}
      <div className={styles.mobileBookingBar}>
        <div className={styles.mobilePriceInfo}>
          <span className={styles.priceLabel}>Wynajem od</span>
          <div className={styles.priceValue}>{scooter.pricePerHour.replace('zł*', '')} <span>PLN / h</span></div>
        </div>
        <a href="tel:+48507697292" className={`btn-primary ${styles.mobileBookBtn}`}>
          <FaPhone /> Zadzwoń
        </a>
      </div>

      <div className="container">
        
        {/* 2. SPECIFICATION (BENTO GRID) */}
        <section className={styles.specsSection}>
          <h2 className={styles.sectionTitle}>Specyfikacja techniczna</h2>
          <div className={styles.bentoGrid}>
            {scooter.horsepower && (
              <div className={`${styles.bentoCard} ${styles.bentoPrimary}`}>
                <FaTachometerAlt className={styles.bentoIcon} />
                <div className={styles.bentoContent}>
                  <span className={styles.bentoLabel}>Silnik / Moc</span>
                  <span className={styles.bentoValue}>{scooter.horsepower}</span>
                </div>
              </div>
            )}
            
            {scooter.capacity && (
              <div className={styles.bentoCard}>
                <FaUsers className={styles.bentoIcon} />
                <div className={styles.bentoContent}>
                  <span className={styles.bentoLabel}>Pojemność</span>
                  <span className={styles.bentoValue}>{scooter.capacity}</span>
                </div>
              </div>
            )}
            
            {scooter.maxSpeed && (
              <div className={styles.bentoCard}>
                <FaTachometerAlt className={styles.bentoIcon} />
                <div className={styles.bentoContent}>
                  <span className={styles.bentoLabel}>V-Max</span>
                  <span className={styles.bentoValue}>{scooter.maxSpeed}</span>
                </div>
              </div>
            )}
            
            {scooter.weight && (
              <div className={styles.bentoCard}>
                <FaWeightHanging className={styles.bentoIcon} />
                <div className={styles.bentoContent}>
                  <span className={styles.bentoLabel}>Waga</span>
                  <span className={styles.bentoValue}>{scooter.weight}</span>
                </div>
              </div>
            )}
            
            {scooter.length && (
              <div className={styles.bentoCard}>
                <FaArrowsAltH className={styles.bentoIcon} />
                <div className={styles.bentoContent}>
                  <span className={styles.bentoLabel}>Długość</span>
                  <span className={styles.bentoValue}>{scooter.length}</span>
                </div>
              </div>
            )}

            {scooter.width && (
              <div className={styles.bentoCard}>
                <FaArrowsAltH className={styles.bentoIcon} />
                <div className={styles.bentoContent}>
                  <span className={styles.bentoLabel}>Szerokość</span>
                  <span className={styles.bentoValue}>{scooter.width}</span>
                </div>
              </div>
            )}

            {scooter.fuelTank && (
              <div className={styles.bentoCard}>
                <FaGasPump className={styles.bentoIcon} />
                <div className={styles.bentoContent}>
                  <span className={styles.bentoLabel}>Zbiornik paliwa</span>
                  <span className={styles.bentoValue}>{scooter.fuelTank}</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 3. EQUIPMENT */}
        {scooter.equipment && scooter.equipment.length > 0 && (
          <section className={styles.equipmentSection}>
            <h2 className={styles.sectionTitle}>Wyposażenie</h2>
            <div className={styles.equipmentGrid}>
              {scooter.equipment.map((item, idx) => (
                <div key={idx} className={styles.equipmentItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. RULES */}
        {scooter.rules && scooter.rules.length > 0 && (
          <section className={styles.rulesSection}>
            <h2 className={styles.sectionTitle}>Ważne informacje</h2>
            <div className={styles.rulesList}>
              {scooter.rules.map((rule, idx) => (
                <div key={idx} className={styles.ruleItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. GALLERY */}
        <section className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Galeria sprzętu</h2>
          <ClientImageGallery images={scooter.gallery} name={name} />
        </section>

      </div>
    </main>
  );
}
