export interface ScooterSpec {
  key: string;
  maxSpeed: string;
  horsepower: string;
  capacity: string;
  length: string;
  weight: string;
  price: string;
  description: string;
  gallery: string[];
  mainImage: string;
}

export const scootersData: Record<string, ScooterSpec> = {
  vx110_1: {
    key: 'vx110_1',
    maxSpeed: '85 km/h',
    horsepower: '110 KM',
    capacity: '3 osoby',
    length: '3.22 m',
    weight: '334 kg',
    price: 'od 300 zł / h',
    description: 'Skuter wodny Yamaha VX110 Cruiser to doskonały sprzęt zarówno dla początkujących, jak i zaawansowanych motorowodniaków. Posiada niezawodny, oszczędny silnik czterosuwowy oraz 3-osobowe siodło. Gwarantuje bezpieczeństwo i świetną zabawę na jeziorach.',
    mainImage: '/SKUTERY-GIZYCKO/assets/20210211_181101.jpg',
    gallery: [
      '/SKUTERY-GIZYCKO/assets/20210211_181101.jpg',
      '/SKUTERY-GIZYCKO/assets/20210211_181212.jpg',
      '/SKUTERY-GIZYCKO/assets/20190805_200721-scaled.jpg',
      '/SKUTERY-GIZYCKO/assets/20200611_205511-scaled.jpg'
    ]
  },
  vx110_2: {
    key: 'vx110_2',
    maxSpeed: '85 km/h',
    horsepower: '110 KM',
    capacity: '3 osoby',
    length: '3.22 m',
    weight: '334 kg',
    price: 'od 300 zł / h',
    description: 'Bliźniaczy model Yamahy VX 110KM. Doskonały do wycieczek z przyjaciółmi dzięki 3-osobowej kanapie i intuicyjnemu sterowaniu. Stabilny na fali, zapewnia pełen komfort pływania.',
    mainImage: '/SKUTERY-GIZYCKO/assets/vx4.jpg',
    gallery: [
      '/SKUTERY-GIZYCKO/assets/vx4.jpg',
      '/SKUTERY-GIZYCKO/assets/IMG-20190819-WA0005.jpg',
      '/SKUTERY-GIZYCKO/assets/IMG-20200920-WA0004-1024x768.jpg',
      '/SKUTERY-GIZYCKO/assets/20200611_211053-scaled.jpg'
    ]
  },
  honda: {
    key: 'honda',
    maxSpeed: '90 km/h',
    horsepower: '165 KM',
    capacity: '3 osoby',
    length: '3.20 m',
    weight: '360 kg',
    price: 'od 350 zł / h',
    description: 'Skuter wodny Honda Aquatrax o dużej mocy (165 KM), stworzony z myślą o miłośnikach większych prędkości i agresywniejszego pływania. Doskonałe wyważenie, sportowy charakter i komfortowe fotele to jego główne atuty.',
    mainImage: '/SKUTERY-GIZYCKO/assets/1-1024x719.jpg',
    gallery: [
      '/SKUTERY-GIZYCKO/assets/1-1024x719.jpg',
      '/SKUTERY-GIZYCKO/assets/20240528_122225-scaled.jpg',
      '/SKUTERY-GIZYCKO/assets/20240528_122529-scaled.jpg'
    ]
  },
  vx180: {
    key: 'vx180',
    maxSpeed: '105 km/h',
    horsepower: '180 KM',
    capacity: '3 osoby',
    length: '3.35 m',
    weight: '348 kg',
    price: 'od 400 zł / h',
    description: 'Yamaha VX ze wzmocnionym silnikiem 180 KM. Bezkompromisowe przyspieszenie, precyzyjne sterowanie i niesamowite wrażenia na wodzie. To sprzęt dla wymagających poszukiwaczy adrenaliny, którzy chcą poczuć wiatr we włosach.',
    mainImage: '/SKUTERY-GIZYCKO/assets/IMG-20200809-WA0018.jpg',
    gallery: [
      '/SKUTERY-GIZYCKO/assets/IMG-20200809-WA0018.jpg',
      '/SKUTERY-GIZYCKO/assets/20240601_182330-scaled.jpg',
      '/SKUTERY-GIZYCKO/assets/20240601_182339-scaled.jpg',
      '/SKUTERY-GIZYCKO/assets/20240601_182359-scaled.jpg'
    ]
  },
  activ505: {
    key: 'activ505',
    maxSpeed: '60 km/h',
    horsepower: '100 KM',
    capacity: '5 osób',
    length: '5.07 m',
    weight: '582 kg',
    price: 'od 800 zł / dzień',
    description: 'Motorówka Quicksilver Activ 505 Open łączy w sobie nowoczesny design, ergonomię i funkcjonalność. Na pokład bez problemu zabierzesz nawet 5 osób. Posiada obszerny pokład słoneczny na dziobie – idealny do letniego relaksu. Wymagane uprawnienia motorowodne.',
    mainImage: '/SKUTERY-GIZYCKO/assets/q1.jpg',
    gallery: [
      '/SKUTERY-GIZYCKO/assets/q1.jpg',
      '/SKUTERY-GIZYCKO/assets/20240601_185516-scaled.jpg',
      '/SKUTERY-GIZYCKO/assets/20240630_105901-scaled.jpg'
    ]
  },
  quick675: {
    key: 'quick675',
    maxSpeed: '75 km/h',
    horsepower: '150 KM',
    capacity: '7 osób',
    length: '6.75 m',
    weight: '1084 kg',
    price: 'od 1200 zł / dzień',
    description: 'Flagowy model Quicksilver 675 to potężna łódź z silnikiem o mocy 150 KM. Komfortowa kanapa, obszerna kabina i pokład na 7 osób sprawiają, że to najlepszy wybór na rejsowanie po Szlaku Wielkich Jezior Mazurskich. Poczuj luksus i swobodę.',
    mainImage: '/SKUTERY-GIZYCKO/assets/q2.jpg',
    gallery: [
      '/SKUTERY-GIZYCKO/assets/q2.jpg',
      '/SKUTERY-GIZYCKO/assets/20240705_150810-scaled.jpg',
      '/SKUTERY-GIZYCKO/assets/slid2-scaled.jpg'
    ]
  }
};
