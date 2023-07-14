import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { sample_food, sample_tags } from '../data';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAll(): Food[] {
    return sample_food;
  }

  getAllFoodyBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name!.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getFoodById(foodId: string) {
    return this.getAll().find((food) => food.id === foodId) ?? new Food();
  }

  getAllFoodByTag(): Tag[] {
    return sample_tags;
  }

  getFoodByTagName(tag: string): Food[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tag.includes(tag));
  }
}
