import requests
from bs4 import BeautifulSoup
import json
import re

urls = [
    "https://skutery-gizycko.pl/yamaha-vx/",
    "https://skutery-gizycko.pl/yamaha-vx-2/",
    "https://skutery-gizycko.pl/honda-aquatrax/",
    "https://skutery-gizycko.pl/lodz-quicksilver-675/",
    "https://skutery-gizycko.pl/lodz-quicksilver-505-open/",
    "https://skutery-gizycko.pl/yamaha-vx-180km/"
]

data = {}

for url in urls:
    resp = requests.get(url)
    soup = BeautifulSoup(resp.content, "html.parser")
    
    slug = url.strip('/').split('/')[-1]
    
    # Try to find gallery images
    images = []
    # Using the standard Elementor gallery classes
    for img in soup.select('.elementor-image-gallery img'):
        src = img.get('src')
        if src:
            src = src.split('?')[0].replace('-150x150', '') # get full size
            if src not in images:
                images.append(src)
                
    # Also find main image if any
    main_imgs = []
    for img in soup.select('.elementor-widget-image img'):
        src = img.get('src')
        if src:
            src = src.split('?')[0]
            if src not in main_imgs:
                main_imgs.append(src)

    # Find the spec list (DODATKOWE INFORMACJE)
    text_content = soup.get_text(separator="\n").strip()
    
    data[slug] = {
        "images": images,
        "main_imgs": main_imgs,
        "text": text_content
    }

with open("scooters_raw.json", "w") as f:
    json.dump(data, f, indent=2)

print("Parsed")
