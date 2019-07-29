import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getFromStockById } from '../../store/stock.selectors';
import { State } from '../../store/stock.reducer';
import { deleteStockItem } from '../../store/stock.actions';
@Component({
  selector: 'app-stock-single',
  templateUrl: './stock-single.component.html',
  styleUrls: ['./stock-single.component.scss']
})
export class StockSingleComponent implements OnInit {
  product;
  id;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.store
        .pipe(select(getFromStockById, this.id))
        .subscribe(product => (this.product = product));
      // this.productO.subscribe(t => console.log(t));
    });
  }

  // deleteProduct() {
  //   this.store.dispatch(deleteProduct({ id: this.id }));
  //   this.router.navigate(['product']);
  // }
  // addToStock() {
  //   console.log('test', this.product);
  //   this.store.dispatch(addToStock(this.product));
  // }

  deleteProduct() {
    this.store.dispatch(deleteStockItem({ id: this.id }));
    this.router.navigate(['stock']);
  }
}
