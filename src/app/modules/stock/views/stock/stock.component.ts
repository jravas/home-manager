import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stock: Observable<any>;

  constructor(public store: Store<any>) {
    this.stock = this.store.pipe(select('stock'));
  }

  ngOnInit() {}
}
