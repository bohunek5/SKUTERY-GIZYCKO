import requests
from bs4 import BeautifulSoup

urls = {
    'yamaha-vx': 'https://skutery-gizycko.pl/yamaha-vx',
    'yamaha-vx-2': 'https://skutery-gizycko.pl/yamaha-vx-2/',
    'honda-aquatrax': 'https://skutery-gizycko.pl/honda-aquatrax',
    'yamaha-vx-180km': 'https://skutery-gizycko.pl/yamaha-vx-180km',
    'lodz-quicksilver-505-open': 'https://skutery-gizycko.pl/lodz-quicksilver-505-open/',
    'lodz-quicksilver-675': 'https://skutery-gizycko.pl/lodz-quicksilver-675/'
}

for name, url in urls.items():
    print(f"\n--- {name} ---")
    try:
        html = requests.get(url).text
        soup = BeautifulSoup(html, 'html.parser')
        
        # Original site uses Essential Grid or similar.
        # Often images are in <img> tags with class containing 'eg-', or inside <a> with class 'eg-...'
        # Or we can just find all large images (not thumbnails).
        # We can look for .jpg / .png inside the main content area.
        
        images = []
        for img in soup.find_all('img'):
            src = img.get('src', '')
            if 'wp-content/uploads' in src and ('-scaled' in src or '-' not in src.split('/')[-1] or len(src.split('/')[-1].split('-')) <= 2):
                # trying to filter out thumbnails like 150x150
                if 'x' not in src.split('/')[-1]:
                    images.append(src)
                elif '-scaled' in src:
                    images.append(src)

        # Print unique
        for img in sorted(list(set(images))):
            if 'logo' not in img.lower():
                print(img)
    except Exception as e:
        print(f"Error: {e}")
