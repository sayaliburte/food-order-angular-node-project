import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
   
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
