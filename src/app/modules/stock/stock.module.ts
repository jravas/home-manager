import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StockComponent } from './views/stock/stock.component';
import { StockSingleComponent } from './views/stock-single/stock-single.component';
import { StockAddComponent } from './views/stock-add/stock-add.component';

import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  declarations: [StockComponent, StockSingleComponent, StockAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedComponentsModule
  ],
  exports: [StockComponent, StockSingleComponent]
})
export class StockModule {}
