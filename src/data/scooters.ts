export interface ScooterSpec {
  key: string;
  name: string;
  maxSpeed: string;
  horsepower: string;
  capacity: string;
  length: string;
  weight: string;
  pricePerHour: string;
  pricePerDay: string;
  fuelTank?: string;
  description: string;
  rules: string[];
  gallery: string[];
  mainImage: string;
}

export const scootersData: Record<string, ScooterSpec> = {
  'yamaha-vx': {
    key: 'yamaha-vx',
    name: 'Skuter wodny YAMAHA VX',
    maxSpeed: '85 km/h',
    horsepower: '110 KM',
    capacity: '3 osoby',
    length: '3.22 m',
    weight: '334 kg',
    fuelTank: '70 litrów',
    pricePerHour: '400zł*',
    pricePerDay: '1000zł**',
    description: 'Skuter wodny Yamaha VX110 Cruiser to doskonały sprzęt zarówno dla początkujących, jak i zaawansowanych motorowodniaków. Posiada niezawodny, oszczędny silnik czterosuwowy oraz 3-osobowe siodło. Gwarantuje bezpieczeństwo i świetną zabawę na jeziorach.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa'
    ],
    mainImage: '/assets/20210211_181101.jpg',
    gallery: [
      '/assets/20210211_181101.jpg',
      '/assets/20210211_181212.jpg',
      '/assets/20190805_200721-scaled.jpg',
      '/assets/20200611_205511-scaled.jpg'
    ]
  },
  'yamaha-vx-2': {
    key: 'yamaha-vx-2',
    name: 'Skuter wodny Yamaha VX 2',
    maxSpeed: '85 km/h',
    horsepower: '110 KM',
    capacity: '3 osoby',
    length: '3.22 m',
    weight: '334 kg',
    fuelTank: '70 litrów',
    pricePerHour: '400zł*',
    pricePerDay: '1000zł**',
    description: 'Bliźniaczy model Yamahy VX 110KM. Doskonały do wycieczek z przyjaciółmi dzięki 3-osobowej kanapie i intuicyjnemu sterowaniu. Stabilny na fali, zapewnia pełen komfort pływania.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa'
    ],
    mainImage: '/assets/vx4.jpg',
    gallery: [
      '/assets/vx4.jpg',
      '/assets/IMG-20190819-WA0005.jpg',
      '/assets/IMG-20200920-WA0004-1024x768.jpg',
      '/assets/20200611_211053-scaled.jpg'
    ]
  },
  'honda-aquatrax': {
    key: 'honda-aquatrax',
    name: 'Honda Aquatrax',
    maxSpeed: '90 km/h',
    horsepower: '160 KM',
    capacity: '3 osoby',
    length: '3.20 m',
    weight: '360 kg',
    fuelTank: '65 litrów',
    pricePerHour: '450zł*',
    pricePerDay: '1000zł**',
    description: 'Skuter wodny Honda Aquatrax o dużej mocy (160 KM), stworzony z myślą o miłośnikach większych prędkości i agresywniejszego pływania. Doskonałe wyważenie, sportowy charakter i komfortowe fotele to jego główne atuty.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa'
    ],
    mainImage: '/assets/1-1024x719.jpg',
    gallery: [
      '/assets/1-1024x719.jpg',
      '/assets/20240528_122225-scaled.jpg',
      '/assets/20240528_122529-scaled.jpg'
    ]
  },
  'yamaha-vx-180km': {
    key: 'yamaha-vx-180km',
    name: 'Skuter wodny YAMAHA VX 180KM',
    maxSpeed: '105 km/h',
    horsepower: '180 KM',
    capacity: '3 osoby',
    length: '3.35 m',
    weight: '348 kg',
    fuelTank: '70 litrów',
    pricePerHour: '500zł*',
    pricePerDay: '1200zł**',
    description: 'Yamaha VX ze wzmocnionym silnikiem 180 KM. Bezkompromisowe przyspieszenie, precyzyjne sterowanie i niesamowite wrażenia na wodzie. To sprzęt dla wymagających poszukiwaczy adrenaliny, którzy chcą poczuć wiatr we włosach.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa'
    ],
    mainImage: '/assets/IMG-20200809-WA0018.jpg',
    gallery: [
      '/assets/IMG-20200809-WA0018.jpg',
      '/assets/20240601_182330-scaled.jpg',
      '/assets/20240601_182339-scaled.jpg',
      '/assets/20240601_182359-scaled.jpg'
    ]
  },
  'lodz-quicksilver-505-open': {
    key: 'lodz-quicksilver-505-open',
    name: 'Łódź QUICKSILVER 505 OPEN',
    maxSpeed: '60 km/h',
    horsepower: '100 KM',
    capacity: '5 osób',
    length: '5.07 m',
    weight: '582 kg',
    pricePerHour: '200zł*',
    pricePerDay: '1000zł**',
    description: 'Motorówka Quicksilver Activ 505 Open łączy w sobie nowoczesny design, ergonomię i funkcjonalność. Na pokład bez problemu zabierzesz nawet 5 osób. Posiada obszerny pokład słoneczny na dziobie – idealny do letniego relaksu. Wymagane uprawnienia motorowodne.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa'
    ],
    mainImage: '/assets/q1.jpg',
    gallery: [
      '/assets/q1.jpg',
      '/assets/20240601_185516-scaled.jpg',
      '/assets/20240630_105901-scaled.jpg'
    ]
  },
  'lodz-quicksilver-675': {
    key: 'lodz-quicksilver-675',
    name: 'Łódź QUICKSILVER 675',
    maxSpeed: '75 km/h',
    horsepower: '225 KM',
    capacity: '7 osób',
    length: '7.00 m',
    weight: '1084 kg',
    pricePerHour: '600zł*',
    pricePerDay: '1700zł**',
    description: 'Flagowy model Quicksilver 675 to potężna łódź z silnikiem o mocy 225 KM. Komfortowa kanapa, obszerna kabina i pokład na 7 osób sprawiają, że to najlepszy wybór na rejsowanie po Szlaku Wielkich Jezior Mazurskich. Poczuj luksus i swobodę.',
    rules: [
      'Sprzęt wydawany jest od godziny 9:00 do 20:00',
      'Wymagany patent sternika motorowodnego',
      'Kaucja zwrotna płatna gotówką',
      'Płatność za czarter: 40% przy rezerwacji, 60% przed wypłynięciem',
      'Przed wypłynięciem udzielany jest instruktaż obsługi wynajmowanego sprzętu oraz zachowania bezpieczeństwa'
    ],
    mainImage: '/assets/q2.jpg',
    gallery: [
      '/assets/q2.jpg',
      '/assets/20240705_150810-scaled.jpg',
      '/assets/slid2-scaled.jpg'
    ]
  }
};

