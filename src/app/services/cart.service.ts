import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
    this.setCartDataInStorage();
  }
  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
    this.setCartDataInStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price!;
    this.setCartDataInStorage();

  }

  clearCart(): void {
    this.cart = new Cart();
    this.setCartDataInStorage();

  }

  getCartDataByObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartDataInStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price!,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );

    const cart = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cart);
    this.cartSubject.next(this.cart);
  }

  private setCartFromLocalStorage(): Cart {
    const cart = localStorage.getItem('Cart');
    return cart ? JSON.parse(cart) : new Cart();
  }
}
