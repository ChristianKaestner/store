export const images = [
  { uri: '/hero1.png' },
  { uri: '/hero2.png' },
  { uri: '/hero3.png' },
  { uri: '/hero5.png' },
  { uri: '/hero6.png' },
  { uri: '/hero7.png' },
  { uri: '/hero8.png' },
  { uri: '/hero9.png' },
  { uri: '/hero10.png' },
];

export const categories = [
  {
    id: 1,
    image: '/cat-hookahs.png',
    name: 'Hookahs',
    url: '/hookahs',
  },
  {
    id: 2,
    image: '/cat-tobacco.png',
    name: 'Tobacco',
    url: '/tobacco',
  },
  {
    id: 3,
    image: '/cat-coals.png',
    name: 'Coals',
    url: '/coals',
  },
  {
    id: 4,
    image: '/cat-bowls.png',
    name: 'Bowls',
    url: '/bowls',
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

const review1 = {
  id: 1,
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  pros: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  cons: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  images: ['/hookah_item.jpg', '/hookah_item2.jpg'],
  rating: 5,
  date: '01 september 2023',
  name: 'Mike',
  usefulness: { pros: 0, cons: 0 },
  isBuyer: true,
  comments: [],
};

const review2 = {
  id: 2,
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  pros: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  cons: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  images: ['/hookah_item.jpg', '/hookah_item2.jpg'],
  rating: 5,
  date: '01 september 2023',
  name: 'Mike',
  usefulness: { pros: 0, cons: 0 },
  isBuyer: true,
  comments: [
    {
      id: 1,
      postId: 1,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      name: 'Nick',
      date: '02 september 2023',
    },
  ],
};

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
  favorites: [1, 22, 17, 35, 41, 43, 47, 52, 60, 64],
  reviews: [review1, review2],
};
