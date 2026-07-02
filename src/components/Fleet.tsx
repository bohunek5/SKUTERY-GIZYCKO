/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from 'next-intl';
import styles from './Fleet.module.scss';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scootersData } from '@/data/scooters';
import { Link } from '@/i18n/routing';

const fleetData = [
  { key: 'yamaha-vx', class: styles.span2col + ' ' + styles.span2row },
  { key: 'honda-aquatrax', class: styles.span2col },
  { key: 'yamaha-vx-180km', class: styles.span2col },
  { key: 'lodz-quicksilver-505-open', class: styles.span2col },
  { key: 'lodz-quicksilver-675', class: styles.span2col },
  { key: 'yamaha-vx-2', class: styles.span4col },
];

export default function Fleet() {
  const t = useTranslations('Fleet');

  return (
    <section id="fleet" className={`section ${styles.fleet}`}>
      <div className={`container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">{t('subtitle')}</span>
          <h2>{t('title')}</h2>
        </motion.div>

        <div className={styles.bentoGrid}>
          {fleetData.map((item, index) => {
            const scooter = scootersData[item.key];
            return (
              <motion.div 
                key={item.key} 
                className={`${styles.bentoCard} ${item.class}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/sprzet/${item.key}`} className={styles.cardLink}>
                  <div className={styles.imageWrapper}>
                    <img src={scooter?.mainImage || ''} alt={t(`items.${item.key}.name`)} />
                  </div>
                  <div className={styles.overlay}></div>
                  
                  <div className={styles.info}>
                    <h3>{t(`items.${item.key}.name`)}</h3>
                    {scooter && (
                      <p className={styles.specs}>
                        Moc: {scooter.horsepower} • {scooter.capacity} <br/>
                        <span className={styles.price}>{scooter.pricePerHour}</span>
                      </p>
                    )}
                    <div className={styles.action}>
                      <span className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}>
                        {t('details')} <ArrowRight size={16} style={{ marginLeft: '8px' }}/>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
