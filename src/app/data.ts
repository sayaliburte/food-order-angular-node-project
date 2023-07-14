import { Food } from './models/food';
import { Tag } from './models/tag';

export const sample_food: Food[] = [
  {
    id: '1',
    name: 'Pizza',
    price: 300,
    tag: ['Pizza', 'FastFood', 'All'],
    favourite: true,
    stars: 5,
    imageUrl: 'assets/Pizza.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins',
  },
  {
    id: '2',
    name: 'Burger',
    price: 100,
    tag: ['Burger', 'FastFood', 'All'],
    favourite: false,
    stars: 3,
    imageUrl: 'assets/Burger.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins',
  },
  {
    id: '3',
    name: 'Sizzlers',
    price: 400,
    tag: ['Sizzlers', 'All', 'Lunch'],
    favourite: true,
    stars: 5,
    imageUrl: 'assets/Sizzlers.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins',
  },
  {
    id: '4',
    name: 'Paneer Roll',
    price: 200,
    tag: ['Paneer Roll', 'Cheese', 'All'],
    favourite: true,
    stars: 5,
    imageUrl: 'assets/PaneerRoll.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins',
  },
  {
    id: '5',
    name: 'Dessert',
    price: 200,
    tag: ['Dessert', 'Choclate', 'All'],
    favourite: true,
    stars: 4,
    imageUrl: 'assets/dessert.jpg',
    origin: ['Australia'],
    cookTime: '10-20mins',
  },
  {
    id: '6',
    name: 'Soup',
    price: 200,
    tag: ['Soup', 'All', 'Lunch'],
    favourite: true,
    stars: 5,
    imageUrl: 'assets/soup.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins',
  },

];

export const sample_tags: Tag[] = [
  {
    name: 'All',
    count: 6,
  },
  {
    name: 'FastFood',
    count: 2,
  },
  {
    name: 'Pizza',
    count: 1,
  },
  {
    name: 'Lunch',
    count: 1,
  },
  {
    name: 'Soup',
    count: 1,
  },
  {
    name: 'Dessert',
    count: 1,
  },
];
