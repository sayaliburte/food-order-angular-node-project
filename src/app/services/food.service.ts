import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { sample_food } from '../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {


  }
  getAll():Food[]{
      return sample_food;
  }
}
