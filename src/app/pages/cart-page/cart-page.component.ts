import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart: Cart = new Cart();
  constructor(private cartService: CartService) {
    this.cartService.getCartDataByObservable().subscribe((cart)=>{
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem): void{
    this.cartService.removeFromCart(cartItem.food.id!);
  }

  changeQuantity(cartItem:CartItem, quantity: number): void{
    console.log(cartItem,quantity)
    this.cartService.changeQuantity(cartItem.food.id!,quantity);
  }
}
