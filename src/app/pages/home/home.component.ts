import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods : Food[] = [];
  private subscriptionList: Subscription[] = [];
  constructor(private foodService: FoodService,
        activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe((params)=>{
    //  let foodsObservable: Observable<Food[]>;
      if(params['searchTerm']){

      //  foodsObservable = this.foodService.getAllFoodyBySearchTerm(params['searchTerm']);
        const subscription = this.foodService.getAllFoodyBySearchTerm(params['searchTerm'])
        .subscribe((response)=>{
          this.foods = response;

        })
        this.subscriptionList.push(subscription);
        //this.foods = this.foodService.getAllFoodyBySearchTerm(params['searchTerm']);

      }else if(params['tag']){
        const subscription = this.foodService.getFoodByTagName(params['tag'])
        .subscribe((response)=>{
          console.log(response)
            this.foods = response
        },(error)=>{
          console.log(error)
        })
        this.subscriptionList.push(subscription);
      //  this.foods = this.foodService.getFoodByTagName(params['tag']);

     // foodsObservable = this.foodService.getFoodByTagName(params['tag']);
      }
      else{

        const subscription = this.foodService.getAll().subscribe((response)=>{
          this.foods = response;
        },(error)=>{
          console.log(error);
        });
        this.subscriptionList.push(subscription);
        //foodsObservable = this.foodService.getAll();
        // foodsObservable.subscribe(response=>{
        //   this.foods = response
        // })
      }
    })

   // this.foods = this.foodService.getAll();
   }

  ngOnInit(): void {
  }

}
