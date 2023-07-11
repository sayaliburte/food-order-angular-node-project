import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods : Food[] = [];
  constructor(private foodService: FoodService) {

    this.foods = this.foodService.getAll();
   }

  ngOnInit(): void {
  }

}
