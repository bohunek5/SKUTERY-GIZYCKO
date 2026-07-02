export interface ScooterSpec {
  key: string;
  name: string;
  maxSpeed?: string; // Made optional
  horsepower: string;
  capacity: string;
  length?: string;
  width?: string; // Added width
  weight?: string;
  pricePerHour: string;
  pricePerDay: string;
  fuelTank?: string;
  description: string;
  equipment?: string[]; // Added equipment
  rules: string[];
  gallery: string[];
  mainImage: string;
}

export const scootersData: Record<string, ScooterSpec> = {
  'yamaha-vx': {
    key: 'yamaha-vx',
    name: 'YAMAHA VX 110KM',
    horsepower: '110 KM',
    capacity: '3 osoby',
    fuelTank: '70 litrów',
    pricePerHour: '400zł*',
    pricePerDay: '1000zł**',
    description: 'Skuter wodny Yamaha VX 110KM – Wypożyczalnia skuterów wodnych i motorówek.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Kaucja zwrotna płatna gotówką',
      'Kaucja przy jednej godzinie wynajmu: 1000zł',
      'Kaucja przy całym dniu wynajmu: 2000zł',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa na wodzie',
      '*Cena zawiera opłatę za paliwo',
      '**Cena nie zawiera opłaty za paliwo, skuter jest wydawany z pełnym zbiornikiem. Zużycie paliwa jest uzupełniane przez klienta przed zdaniem sprzętu do wypożyczalni.'
    ],
    mainImage: 'https://skutery-gizycko.pl/wp-content/uploads/2021/02/20210211_181101.jpg',
    gallery: [
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240706_105325.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240705_150955.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240705_150824.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240705_150810.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240630_105901.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240621_185024.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20230910_163011.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20230910_162309.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2021/02/20210211_181101.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2021/02/IMG-20200709-WA0006.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2021/02/IMG-20200709-WA0018.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2021/02/IMG-20200809-WA0018.jpg"
    ]
  },
  'yamaha-vx-2': {
    key: 'yamaha-vx-2',
    name: 'Yamaha VX',
    horsepower: '110 KM',
    capacity: '3 osoby',
    fuelTank: '70 litrów',
    pricePerHour: '400zł*',
    pricePerDay: '1000zł**',
    description: 'Yamaha VX – Wypożyczalnia skuterów wodnych i motorówek.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa na wodzie',
      'Kaucja przy jednej godzinie wynajmu: 1000zł',
      'Kaucja przy całym dniu wynajmu: 2000zł',
      '*Cena zawiera opłatę za paliwo',
      '**Cena nie zawiera opłaty za paliwo, skuter jest wydawany z pełnym zbiornikiem. Zużycie paliwa jest uzupełniane przez klienta przed zdaniem sprzętu do wypożyczalni.'
    ],
    mainImage: 'https://skutery-gizycko.pl/wp-content/uploads/2024/08/1.jpg',
    gallery: [
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240621_185024.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240630_105901.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240705_150810.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240705_150824.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240705_150955.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20240706_105325.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20230910_162309-1.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/08/20230910_163011-1.jpg"
    ]
  },
  'honda-aquatrax': {
    key: 'honda-aquatrax',
    name: 'Honda Aquatrax',
    horsepower: '160 KM',
    capacity: '3 osoby',
    fuelTank: '65 litrów',
    pricePerHour: '450zł*',
    pricePerDay: '1000zł**',
    description: 'Honda Aquatrax – Wypożyczalnia skuterów wodnych i motorówek.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa na wodzie',
      'Kaucja przy jednej godzinie wynajmu: 1000zł',
      'Kaucja przy całym dniu wynajmu: 2000zł',
      '*Cena zawiera opłatę za paliwo',
      '**Cena nie zawiera opłaty za paliwo, skuter jest wydawany z pełnym zbiornikiem. Zużycie paliwa jest uzupełniane przez klienta przed zdaniem sprzętu do wypożyczalni.'
    ],
    mainImage: 'https://skutery-gizycko.pl/wp-content/uploads/2021/02/IMG-20200920-WA0004.jpg',
    gallery: [
      "https://skutery-gizycko.pl/wp-content/uploads/2021/02/IMG-20200920-WA0004.jpg"
    ]
  },
  'yamaha-vx-180km': {
    key: 'yamaha-vx-180km',
    name: 'YAMAHA VX 180KM',
    horsepower: '180 KM',
    capacity: '3 osoby',
    fuelTank: '70 litrów',
    pricePerHour: '500zł*',
    pricePerDay: '1200zł**',
    description: 'YAMAHA VX 180KM – Wypożyczalnia skuterów wodnych i motorówek.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa na wodzie',
      'Kaucja przy jednej godzinie wynajmu: 1000zł',
      'Kaucja przy całym dniu wynajmu: 2500zł',
      '*Cena zawiera opłatę za paliwo',
      '**Cena nie zawiera opłaty za paliwo, skuter jest wydawany z pełnym zbiornikiem. Zużycie paliwa jest uzupełniane przez klienta przed zdaniem sprzętu do wypożyczalni.'
    ],
    mainImage: 'https://skutery-gizycko.pl/wp-content/uploads/2025/04/vr1.jpg',
    gallery: [
      "https://skutery-gizycko.pl/wp-content/uploads/2025/04/vr1.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2025/04/vx2.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2025/04/vx3.jpg"
    ]
  },
  'lodz-quicksilver-505-open': {
    key: 'lodz-quicksilver-505-open',
    name: 'Łódź QUICKSILVER 505 OPEN',
    horsepower: '10 KM',
    capacity: '6 osób',
    length: '5.03 m',
    width: '2.12 m',
    fuelTank: '90 litrów',
    pricePerHour: '200zł*',
    pricePerDay: '1000zł**',
    description: 'Quicksilver ACTIV 505 OPEN wprowadza nowy wymiar do czarteru małych łodzi. Ta wszechstronna 5-metrowa jednostka ma wszystko, aby zaspokoić potrzeby małej rodziny lub grupy przyjaciół.\nQuicksilver 505 osiąga rewelacyjne wyniki w swojej kategorii dzięki sportowej stylizacji i wyjątkowym funkcjom. Stylowa konsola jest wyposażona w wysokiej jakości ploter GPS, radio oraz czytelne zegary. Po obu stronach silnika znajdują się platformy zapewniające łatwy dostęp do wody. Drabinka do pływania została umieszczona na rufie, aby osoby korzystające z kąpieli mogły z łatwością wydostać się na pokład. Z ACTIV 505 będziesz chciał spędzić cały dzień na wodzie nawet z 6 osobową załogą. Wszystko, co musisz zrobić, to zarezerwować nasz sprzęt i uczynić jezioro swoim placem zabaw!',
    equipment: [
      'Echosonda',
      'Radio FUSION',
      'Składany daszek Bimini'
    ],
    rules: [
      'Wymagany patent sternika motorowodnego',
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Na motorówce obowiązuje zakaz palenia oraz chodzenia w obuwiu',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa na wodzie',
      'Kaucja przy jednej godzinie wynajmu: 500zł',
      'Kaucja przy całym dniu wynajmu: 1000zł',
      '*Cena zawiera opłatę za paliwo',
      '**Cena nie zawiera opłaty za paliwo, motorówka jest wydawana z pełnym zbiornikiem. Zużycie paliwa jest uzupełniane przez klienta przed zdaniem sprzętu do wypożyczalni.'
    ],
    mainImage: 'https://skutery-gizycko.pl/wp-content/uploads/2025/04/quicksilver505-2.jpg',
    gallery: [
      "https://skutery-gizycko.pl/wp-content/uploads/2025/04/quicksilver505-3-1170x658.png",
      "https://skutery-gizycko.pl/wp-content/uploads/2025/04/quicksilver505-2.jpg"
    ]
  },
  'lodz-quicksilver-675': {
    key: 'lodz-quicksilver-675',
    name: 'Łódź QUICKSILVER 675',
    horsepower: 'MERCURY 225 KM',
    capacity: '7 osób',
    length: '7.00 m',
    width: '2.46 m',
    pricePerHour: '600zł*',
    pricePerDay: '1700zł**',
    description: 'Oferujemy do wynajęcia motorówkę Quicksilver 675 cruiser 225km / 2022r.\nNa łodzi Activ 675 Cruiser jest wyraźnie określony obszar wyjścia, który mówi wszystkim pasażerom, gdzie mają wejść i wyjść z łodzi.\nPozwala to na szybkie i bezpieczne wsiadanie do łodzi. Po wejściu na pokład można łatwo poruszać się od dziobu do rufy. A jeśli chcesz popływać, istnieje duży podest – platforma kąpielowa. Ergonomiczne stanowisko sterowania i głęboki kokpit sprawiają, że kapitan, załoga, łącznie z dziećmi jest zawsze bezpieczna.\nDuże lewe stopnie umożliwiają łatwy dostęp do przedniego pokładu. Ten unikalny układ pokładu uwalnia przestrzeń w środku łodzi. I to właśnie tam znajdują się półprzezroczyste drzwi, które po przesunięciu, umożliwiają wejście do kabiny w kształcie litery U, która można przekształcić w wygodną podwójną koję. Półprzezroczyste drzwi kabiny, otwierany świetlik i luk pokładowy zapewniają duże oświetlenie i wentylację.\nWiększość akcji na Cruiser Activ 675 odbywa się w obszarze kokpitu. Podwójny, dwukierunkowy fotel drugiego sternika umożliwia pozostawanie twarzą do przodu podczas rejsu lub wspólne spędzanie czasu i relaks, na przykład podczas kolacji. A jeśli do konfiguracji jachtu dodasz sterburtę z flipem na prawej burcie, jeszcze więcej osób zgromadzi się wokół stołu w kokpicie. W ciągu kilku minut kokpit może zostać zamieniony w salon słoneczny. Jeśli położysz siedzenie na rufie, salon słoneczny stanie się jeszcze większy.\nSchowki są zintegrowane pod platformą pływacką i pod siedzeniami w kokpicie. Cała ta przestrzeń jest dostępna do przechowywania rzeczy osobistych. Ochraniacze, a nawet opcjonalny daszek mają swoje własne dedykowane miejsce do przechowywania.\n\nLokalizacja: Port Stranda\n\nMOŻLIWOŚĆ WYNAJĘCIA ŁODZI ZE STERNIKIEM (za dodatkową opłatą)',
    equipment: [
      'Ster strumieniowy',
      'Lodówka',
      'Składany daszek Bimini',
      'GPS z mapami Mazur',
      'Prysznic zewnętrzny',
      'Ogrzewanie',
      'Elektryczna winda kotwiczna',
      'Gniazdo 12V (ładowanie telefonu)',
      '1 zamykana kabina',
      'Echosonda',
      'Cabrio'
    ],
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternik motorowodny + dowód osobisty',
      'Kaucja zwrotna płatna gotówką 4000zł',
      'Na motorówce obowiązuje zakaz palenia oraz chodzenia w obuwiu',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa na wodzie',
      '*Cena zawiera opłatę za paliwo',
      '**Cena nie zawiera opłaty za paliwo, motorówka jest wydawana z pełnym zbiornikiem. Zużycie paliwa jest uzupełniane przez klienta przed zdaniem sprzętu do wypożyczalni.'
    ],
    mainImage: 'https://skutery-gizycko.pl/wp-content/uploads/2025/04/q2.jpg',
    gallery: [
      "https://skutery-gizycko.pl/wp-content/uploads/2024/07/IMG-20240508-WA0051.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/07/IMG-20240510-WA0005.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/07/Screenshot_20240715_120347_OLXpl.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/07/Screenshot_20240715_120350_OLXpl.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/07/Screenshot_20240715_120352_OLXpl.jpg",
      "https://skutery-gizycko.pl/wp-content/uploads/2024/07/bez-nazwy.png"
    ]
  }
};


