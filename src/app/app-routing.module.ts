import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodDetailsPageComponent } from './pages/food-details-page/food-details-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
 },
  {
     path:'search/:searchTerm',
     component: HomeComponent
  },
  {
    path:'tag/:tag',
    component: HomeComponent
 },
  {
    path:'food/:id',
    component: FoodDetailsPageComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      useHash: true,
      onSameUrlNavigation: 'reload'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
