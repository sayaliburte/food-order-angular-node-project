import { Food } from './food';

export class CartItem {
  quantity: number;
  price: number | null;
  
  constructor(public food: Food) {
    this.quantity = 1;
    this.price = this.food.price;
  }
}
