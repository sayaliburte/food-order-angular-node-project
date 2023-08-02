import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodDetailsPageComponent } from './pages/food-details-page/food-details-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:searchTerm',
    component: HomeComponent,
  },
  {
    path: 'tag/:tag',
    component: HomeComponent,
  },
  {
    path: 'food/:id',
    component: FoodDetailsPageComponent,
  },
  {
    path: 'cart-page',
    component: CartPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
