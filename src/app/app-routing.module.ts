import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './modules/product/views/product/product.component';
import { HomeComponent } from './views/home/home.component';
import { SettingsComponent } from './views/settings/settings.component';
import { StockComponent } from './modules/stock/views/stock/stock.component';

import { ProductAddComponent } from './modules/product/views/product-add/product-add.component';
import { ProductSingleComponent } from './modules/product/views/product-single/product-single.component';
import { StockSingleComponent } from './modules/stock/views/stock-single/stock-single.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductSingleComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'stock', component: StockComponent },
  { path: 'stock/:id', component: StockSingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
