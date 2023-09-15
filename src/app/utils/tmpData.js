export const images = [
  { uri: '/hookah1.jpg' },
  { uri: '/hookah2.jpg' },
  { uri: '/hookah3.jpg' },
  { uri: '/hookah4.jpg' },
  { uri: '/hookah5.jpg' },
];

export const categories = [
  {
    id: 1,
    image: '/hookah_cat.jpg',
    name: 'Hookahs',
    description: 'Best hookah in the World',
    uri: '/',
    subCategory: [
      { id: 1, name: 'Brand 1', uri: '/', logo: '/brand.jpg' },
      { id: 2, name: 'Brand 2', uri: '/', logo: '/brand.jpg' },
      { id: 3, name: 'Brand 3', uri: '/', logo: '/brand.jpg' },
      { id: 4, name: 'Brand 4', uri: '/', logo: '/brand.jpg' },
      { id: 5, name: 'Brand 5', uri: '/', logo: '/brand.jpg' },
      { id: 6, name: 'Brand 6', uri: '/', logo: '/brand.jpg' },
      { id: 7, name: 'Brand 7', uri: '/', logo: '/brand.jpg' },
      { id: 8, name: 'Brand 8', uri: '/', logo: '/brand.jpg' },
      { id: 9, name: 'Brand 9', uri: '/', logo: '/brand.jpg' },
      { id: 10, name: 'Brand 10', uri: '/', logo: '/brand.jpg' },
    ],
  },
  {
    id: 2,
    image: '/tobako_cat.jpg',
    name: 'Tobacco',
    description: 'Best tobacco in the World',
    uri: '/',
    subCategory: [
      { id: 1, name: 'Brand 1', uri: '/', logo: '/brand.jpg' },
      { id: 2, name: 'Brand 2', uri: '/', logo: '/brand.jpg' },
      { id: 3, name: 'Brand 3', uri: '/', logo: '/brand.jpg' },
      { id: 4, name: 'Brand 4', uri: '/', logo: '/brand.jpg' },
      { id: 5, name: 'Brand 5', uri: '/', logo: '/brand.jpg' },
      { id: 6, name: 'Brand 6', uri: '/', logo: '/brand.jpg' },
      { id: 7, name: 'Brand 7', uri: '/', logo: '/brand.jpg' },
      { id: 8, name: 'Brand 8', uri: '/', logo: '/brand.jpg' },
      { id: 9, name: 'Brand 9', uri: '/', logo: '/brand.jpg' },
      { id: 10, name: 'Brand 10', uri: '/', logo: '/brand.jpg' },
      { id: 11, name: 'Brand 11', uri: '/', logo: '/brand.jpg' },
      { id: 12, name: 'Brand 12', uri: '/', logo: '/brand.jpg' },
      { id: 13, name: 'Brand 13', uri: '/', logo: '/brand.jpg' },
      { id: 14, name: 'Brand 14', uri: '/', logo: '/brand.jpg' },
      { id: 15, name: 'Brand 15', uri: '/', logo: '/brand.jpg' },
    ],
  },
  {
    id: 3,
    image: '/coal_cat.jpg',
    name: 'Coals',
    description: 'Best coal in the World',
    uri: '/',
    subCategory: [
      { id: 1, name: 'Brand 1', uri: '/', logo: '/brand.jpg' },
      { id: 2, name: 'Brand 2', uri: '/', logo: '/brand.jpg' },
      { id: 3, name: 'Brand 3', uri: '/', logo: '/brand.jpg' },
      { id: 4, name: 'Brand 4', uri: '/', logo: '/brand.jpg' },
      { id: 5, name: 'Brand 5', uri: '/', logo: '/brand.jpg' },
      { id: 6, name: 'Brand 6', uri: '/', logo: '/brand.jpg' },
      { id: 7, name: 'Brand 7', uri: '/', logo: '/brand.jpg' },
      { id: 8, name: 'Brand 8', uri: '/', logo: '/brand.jpg' },
      { id: 9, name: 'Brand 9', uri: '/', logo: '/brand.jpg' },
      { id: 10, name: 'Brand 10', uri: '/', logo: '/brand.jpg' },
    ],
  },
  {
    id: 4,
    image: '/bowl_cat.jpg',
    name: 'Bowls',
    description: 'Best hookah bowl in the World',
    uri: '/',
    subCategory: [
      { id: 1, name: 'Brand 1', uri: '/', logo: '/brand.jpg' },
      { id: 2, name: 'Brand 2', uri: '/', logo: '/brand.jpg' },
      { id: 3, name: 'Brand 3', uri: '/', logo: '/brand.jpg' },
      { id: 4, name: 'Brand 4', uri: '/', logo: '/brand.jpg' },
      { id: 5, name: 'Brand 5', uri: '/', logo: '/brand.jpg' },
      { id: 6, name: 'Brand 6', uri: '/', logo: '/brand.jpg' },
      { id: 7, name: 'Brand 7', uri: '/', logo: '/brand.jpg' },
      { id: 8, name: 'Brand 8', uri: '/', logo: '/brand.jpg' },
      { id: 9, name: 'Brand 9', uri: '/', logo: '/brand.jpg' },
      { id: 10, name: 'Brand 10', uri: '/', logo: '/brand.jpg' },
    ],
  },
];

export const weight = [
  { id: 1, name: 25 },
  { id: 2, name: 50 },
  { id: 3, name: 100 },
  { id: 4, name: 125 },
  { id: 5, name: 150 },
  { id: 6, name: 250 },
  { id: 7, name: 500 },
  { id: 8, name: 1000 },
];

export const status = [
  { id: 1, name: 'In stock' },
  { id: 2, name: 'Out of stock' },
  { id: 3, name: 'Ending' },
  { id: 4, name: 'Awaiting' },
];

const order1 = {
  id: 1,
  date: '25 august 2023',
  amount: 700,
  status: 'Order shipped',
  goods: [
    {
      product: {
        id: 1,
        categories: 'hookahs',
        price: 720,
        brand: 'Mya',
        title: 'Hookah 65cm brass, good quality',
        images: ['/hookah_item.jpg', '/hookah_item2.jpg'],
      },
      quantity: 1,
      buyingPrice: 700,
    },
  ],
};

const order2 = {
  id: 2,
  date: '28 august 2023',
  amount: 50,
  status: 'Fulfilled',
  goods: [
    {
      product: {
        id: 2,
        categories: 'tobacco',
        price: 10,
        brand: 'Al Fakher',
        title: 'Grape 50g',
        images: ['/1tobacco50.png'],
      },
      quantity: 2,
      buyingPrice: 10,
    },
    {
      product: {
        id: 3,
        categories: 'tobacco',
        price: 10,
        brand: 'Al Fakher',
        title: 'Melon 50g',
        images: ['/1tobacco50.png'],
      },
      quantity: 2,
      buyingPrice: 10,
    },
    {
      product: {
        id: 4,
        categories: 'tobacco',
        price: 10,
        brand: 'Al Fakher',
        title: 'Bubble gum 50g',
        images: ['/1tobacco50.png'],
      },
      quantity: 1,
      buyingPrice: 10,
    },
  ],
};

const orderStatus = [
  'Fulfilled',
  'Pending payment',
  'Pending delivery',
  'Order shipped',
  'Rejected',
];

export const tmpUser = {
  firstName: 'Vladyslav',
  lastName: 'Rohalov',
  phone: '+380952268222',
  email: 'v.rohalov@gmail.com',
  address: {
    city: 'Dnipro',
    street: 'Nezalezhnosti',
    house: '25',
    apartment: '17',
  },
  orders: [order1, order2],
  favorites: [],
  reviews: [],
};
