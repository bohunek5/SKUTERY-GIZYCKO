/* eslint-disable */
const fs = require('fs');

async function scrape(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    
    // In elementor, images are often in a gallery with data-elementor-lightbox-slideshow
    // Let's match all hrefs that end in .jpg/.png inside an <a> tag
    // specifically, the ones inside the main content.
    const regex = /<a[^>]*href=['"](https:\/\/skutery-gizycko\.pl\/wp-content\/uploads\/[^'"]+\.(?:jpg|png|jpeg))['"][^>]*>/gi;
    
    let match;
    const images = [];
    while ((match = regex.exec(html)) !== null) {
      if (!images.includes(match[1])) {
        // filter out small images if possible, or just keep all unique hrefs
        // Usually the a href points to the full size image
        if (!match[1].includes('-150x150') && !match[1].includes('-300x300')) {
            images.push(match[1]);
        }
      }
    }
    
    // the first image might just be the main image in the hero, let's just log them all
    console.log(`\nURL: ${url}`);
    console.log(`mainImage: '${images[0]}',`);
    console.log(`gallery: [\n  '${images.join("',\n  '")}'\n]`);
  } catch (e) {
    console.error(`Failed ${url}:`, e);
  }
}

const urls = [
  'https://skutery-gizycko.pl/yamaha-vx',
  'https://skutery-gizycko.pl/yamaha-vx-2/',
  'https://skutery-gizycko.pl/honda-aquatrax',
  'https://skutery-gizycko.pl/yamaha-vx-180km',
  'https://skutery-gizycko.pl/lodz-quicksilver-505-open/',
  'https://skutery-gizycko.pl/lodz-quicksilver-675/'
];

async function run() {
  for (const url of urls) {
    await scrape(url);
  }
}

run();
