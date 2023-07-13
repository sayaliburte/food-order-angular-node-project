import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
   SearchComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RatingModule
  ]
})
export class HomeModule { }
