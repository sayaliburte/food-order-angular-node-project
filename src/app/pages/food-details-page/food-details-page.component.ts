import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/models/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-details-page',
  templateUrl: './food-details-page.component.html',
  styleUrls: ['./food-details-page.component.scss']
})
export class FoodDetailsPageComponent implements OnInit {
food: Food = new Food;
private subscriptionList: Subscription[] = [];
  constructor(actiavtedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) {
    actiavtedRoute.params.subscribe(params =>{
        if(params['id']){
          const subscription = this.foodService.getFoodById(params['id']).subscribe((response)=>{
            console.log(response)
           this.food = response;
          });
          this.subscriptionList.push(subscription);
        //  this.food = this.foodService.getFoodById(params['id']);
        }
    })
   }

  ngOnInit(): void {
  }

  addToCart(): void{
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
