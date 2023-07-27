import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { sample_food, sample_tags } from '../data';
import { Tag } from '../models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from '../shared/urls/urls';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(FOODS_URL);
  }

  getAllFoodyBySearchTerm(searchTerm: string) {
    return this.httpClient.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getFoodById(foodId: string): Observable<Food> {
    return this.httpClient.get<Food>(FOODS_BY_ID_URL + foodId);
  }

  getAllTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(FOODS_TAGS_URL);
  }

  getFoodByTagName(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.getAll()
      : this.httpClient.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }
}
