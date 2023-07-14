import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-details-page',
  templateUrl: './food-details-page.component.html',
  styleUrls: ['./food-details-page.component.scss']
})
export class FoodDetailsPageComponent implements OnInit {
food: Food =new Food;
  constructor(actiavtedRoute: ActivatedRoute,
    private foodService: FoodService) {
    actiavtedRoute.params.subscribe(params =>{
        if(params['id']){
          this.food = this.foodService.getFoodById(params['id']);
        }
    })
   }

  ngOnInit(): void {
  }

}
