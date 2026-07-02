/* eslint-disable @next/next/no-img-element */
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { scootersData } from '@/data/scooters';
import styles from './page.module.scss';
import { FaTachometerAlt, FaUsers, FaWeightHanging, FaArrowsAltH, FaArrowLeft, FaPhone, FaArrowDown } from 'react-icons/fa';
import { Link } from '@/i18n/routing';
import ClientImageGallery from '@/components/ClientImageGallery';
import ScrollDownBtn from '@/components/ScrollDownBtn';

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
          <img src={scooter.mainImage} alt={name} className={styles.bgImg} />
          <div className={styles.overlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <Link href="/sprzet" className={styles.backBtn}>
            <FaArrowLeft /> Wróć do floty
          </Link>
          
          <div className={styles.heroMain}>
            <div className={styles.titleWrapper}>
              <span className={styles.typeBadge}>{type}</span>
              <h1>{name}</h1>
              
              <div className={styles.heroQuickSpecs}>
                <div className={styles.quickSpec}>
                  <FaTachometerAlt />
                  <span>{scooter.horsepower}</span>
                </div>
                <div className={styles.quickSpec}>
                  <FaUsers />
                  <span>{scooter.capacity}</span>
                </div>
              </div>
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
              <p className={styles.bookingNote}>Brak ukrytych kosztów. Szybka rezerwacja telefoniczna.</p>
            </div>
          </div>
          
          <ScrollDownBtn 
            className={styles.scrollDownBtn} 
            targetSelector={`.${styles.heroSection}`}
          />
        </div>
      </div>

      <div className={styles.mobileBookingBar}>
        <div className={styles.mobilePriceInfo}>
          <span className={styles.priceLabel}>Wynajem od</span>
          <div className={styles.priceValue}>{scooter.pricePerHour.replace('zł*', '')} <span>PLN / h</span></div>
        </div>
        <a href="tel:+48507697292" className={`btn-primary ${styles.mobileBookBtn}`}>
          <FaPhone /> Zadzwoń
        </a>
      </div>

      <div className={`container ${styles.contentSection}`}>
        
        <div className={styles.scooterDescriptionBlock}>
          <p>{scooter.description}</p>
        </div>
        
        <h2 className={styles.sectionTitle}>Specyfikacja techniczna</h2>
        <div className={styles.fullSpecsGrid}>
          <div className={styles.specItem}>
            <div className={styles.iconBox}><FaTachometerAlt /></div>
            <div className={styles.specInfo}>
              <span className={styles.label}>Prędkość max</span>
              <span className={styles.value}>{scooter.maxSpeed}</span>
            </div>
          </div>
          <div className={styles.specItem}>
            <div className={styles.iconBox}><FaTachometerAlt /></div>
            <div className={styles.specInfo}>
              <span className={styles.label}>Moc silnika</span>
              <span className={styles.value}>{scooter.horsepower}</span>
            </div>
          </div>
          <div className={styles.specItem}>
            <div className={styles.iconBox}><FaUsers /></div>
            <div className={styles.specInfo}>
              <span className={styles.label}>Pojemność</span>
              <span className={styles.value}>{scooter.capacity}</span>
            </div>
          </div>
          <div className={styles.specItem}>
            <div className={styles.iconBox}><FaArrowsAltH /></div>
            <div className={styles.specInfo}>
              <span className={styles.label}>Długość</span>
              <span className={styles.value}>{scooter.length}</span>
            </div>
          </div>
          <div className={styles.specItem}>
            <div className={styles.iconBox}><FaWeightHanging /></div>
            <div className={styles.specInfo}>
              <span className={styles.label}>Waga</span>
              <span className={styles.value}>{scooter.weight}</span>
            </div>
          </div>
          {scooter.fuelTank && (
            <div className={styles.specItem}>
              <div className={styles.iconBox}><FaWeightHanging /></div>
              <div className={styles.specInfo}>
                <span className={styles.label}>Zbiornik paliwa</span>
                <span className={styles.value}>{scooter.fuelTank}</span>
              </div>
            </div>
          )}
        </div>

        <h2 className={styles.sectionTitle}>Galeria sprzętu</h2>
        <div className={styles.galleryWrapper}>
          <ClientImageGallery images={scooter.gallery} name={name} />
        </div>

        {scooter.rules && scooter.rules.length > 0 && (
          <div className={styles.rulesSection}>
            <h2 className={styles.sectionTitle}>Ważne informacje</h2>
            <div className={styles.rulesGrid}>
              {scooter.rules.map((rule, idx) => (
                <div key={idx} className={styles.ruleCard}>
                  <div className={styles.checkIcon}>✓</div>
                  <p>{rule}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
