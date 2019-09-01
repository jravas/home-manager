import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { StockItem } from '../../models/stock-item';
import { State } from '../../store/stock.reducer';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockComponent implements OnInit {
  stocksSubscription: Subscription;
  stockItems: StockItem[];

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.stocksSubscription = this.store
      .pipe(select('stock'))
      .subscribe((s: State) => (this.stockItems = s.stock));
  }
}
