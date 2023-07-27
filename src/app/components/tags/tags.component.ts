import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
private subscriptionList: Subscription[] = [];
  constructor(private foodService: FoodService) {
    const subscription = this.foodService.getAllTags().subscribe((response)=>{
      console.log(response)
     this.tags = response;
    });
    this.subscriptionList.push(subscription);
   }

  ngOnInit(): void {
  }

}
