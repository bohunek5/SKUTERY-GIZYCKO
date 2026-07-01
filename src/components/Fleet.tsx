/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from 'next-intl';
import styles from './Fleet.module.scss';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

const fleetData = [
  { key: 'vx110_1', class: styles.span2col + ' ' + styles.span2row }, // Main feature
  { key: 'honda', class: styles.span2col },
  { key: 'vx180', class: styles.span2col },
  { key: 'activ505', class: styles.span2col },
  { key: 'quick675', class: styles.span2col },
  { key: 'vx110_2', class: styles.span4col }, // Wide bottom feature
];

const fleetImages: Record<string, string> = {
  vx110_1: '/SKUTERY-GIZYCKO/assets/20210211_181101.jpg',
  vx110_2: '/SKUTERY-GIZYCKO/assets/vx4.jpg',
  honda: '/SKUTERY-GIZYCKO/assets/1-1024x719.jpg',
  vx180: '/SKUTERY-GIZYCKO/assets/IMG-20200809-WA0018.jpg',
  activ505: '/SKUTERY-GIZYCKO/assets/q1.jpg',
  quick675: '/SKUTERY-GIZYCKO/assets/q2.jpg',
};

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
          {fleetData.map((item, index) => (
            <motion.div 
              key={item.key} 
              className={`${styles.bentoCard} ${item.class}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/scooter/${item.key}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img src={fleetImages[item.key]} alt={t(`items.${item.key}.name`)} />
                </div>
                <div className={styles.overlay}></div>
                
                <div className={styles.info}>
                  <h3>{t(`items.${item.key}.name`)}</h3>
                  <p>{t(`items.${item.key}.type`)}</p>
                  <div className={styles.action}>
                    <span className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}>
                      {t('details')} <ArrowRight size={16} style={{ marginLeft: '8px' }}/>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
