import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductModule } from './modules/product/product.module';
import { ProductComponent } from './modules/product/views/product/product.component';
import { ProductSingleComponent } from './modules/product/views/product-single/product-single.component';
import { HomeComponent } from './views/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EvenetEmmiterService } from './services/evenet-emmiter.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductSingleComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NavigationComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    ProductModule
  ],
  providers: [EvenetEmmiterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
