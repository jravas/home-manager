import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// modules
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './modules/product/product.module';
import { StockModule } from './modules/stock/stock.module';

// components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';
import { SettingsComponent } from './views/settings/settings.component';

//  store
import { productsReducer } from './modules/product/store/product.reducer';
import { stockReducer } from './modules/stock/store/stock.reducer';
import { State } from './modules/product/store/product.reducer';
import { localStorageSyncReducer } from './modules/product/store/localStorage';

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
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers }),
    ProductModule,
    StockModule
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
