import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectProductById } from '../../store/product.selectors';
import { State } from '../../store/product.reducer';
import { deleteProduct } from '../../store/product.actions';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
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
        .pipe(select(selectProductById, this.id))
        .subscribe(product => (this.product = product));
      // this.productO.subscribe(t => console.log(t));
    });
  }

  deleteProduct() {
    this.store.dispatch(deleteProduct({ id: this.id }));
    this.router.navigate(['product']);
  }
}
