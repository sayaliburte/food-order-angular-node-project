import { Food } from "./models/food";

export const sample_food: Food[] = [{
    id: '1',
    name: 'Pizza',
    price: 300,
    tag: ['Pizza','Cheese','Spicy'],
    favourite: true,
    stars: 5,
    imageUrl: 'assets/Pizza.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins'
  },
  {
    id: '2',
    name: 'Burger',
    price: 100,
    tag: ['Burger','Cheese','Spicy'],
    favourite: false,
    stars: 3,
    imageUrl: 'assets/Burger.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins'
  },
  {
    id: '3',
    name: 'Sizzlers',
    price: 400,
    tag: ['Sizzlers','Cheese','Spicy'],
    favourite: true,
    stars: 5,
    imageUrl: 'assets/Sizzlers.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins'
  },
  {
    id: '4',
    name: 'Paneer Roll',
    price: 200,
    tag: ['Paneer Roll','Cheese','Spicy'],
    favourite: true,
    stars: 5,
    imageUrl: 'assets/PaneerRoll.jpg',
    origin: ['Italy'],
    cookTime: '10-20mins'
  }
]
