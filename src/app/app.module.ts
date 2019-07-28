import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ProductModule } from './modules/product/product.module';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';
import { SettingsComponent } from './views/settings/settings.component';
import { StockComponent } from './modules/stock/views/stock/stock.component';

import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { productsReducer } from './modules/product/store/product.reducer';
import { stockReducer } from './modules/stock/store/stock.reducer';
import { localStorageSyncReducer } from './modules/product/store/localStorage';

import { State } from './modules/product/store/product.reducer';
import { StockSingleComponent } from './modules/stock/views/stock-single/stock-single.component';

const reducers: ActionReducerMap<any> = {
  products: productsReducer,
  stock: stockReducer
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>(
  'products'
);

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SettingsComponent,
    StockComponent,
    StockSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    ProductModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers })
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: reducers
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
