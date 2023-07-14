import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { Tag } from 'src/app/models/tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
foods:Food[]=[];
tags: Tag[] = [];
  constructor(private foodService: FoodService) {
    this.tags = foodService.getAllFoodByTag();
   }

  ngOnInit(): void {
  }

}
