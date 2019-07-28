import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EvenetEmmiterService } from '../../../../services/evenet-emmiter.service';
import { Product } from '../../models/product';
import { deleteSelected } from '../../store/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  products: Observable<any>;
  numberOfSelected: number;
  subscription: Subscription;
  isMoreOpen = false;
  isAddNewVIsible = false;

  constructor(
    private store: Store<{ products: any }>,
    private evenetEmmiterService: EvenetEmmiterService // public dialog: MatDialog
  ) {
    this.products = this.store.pipe(select('products'));
  }

  ngOnInit() {
    this.products.subscribe(p => {
      console.log(p);
      this.numberOfSelected = p.products.filter(s => s.selected).length;
      console.log(this.numberOfSelected);
    });
    this.subscription = this.evenetEmmiterService.addProductEvent.subscribe(
      (event: Event) => {
        this.openDialog();
      }
    );
    // this.numberOfSelected.subscribe(e => console.log(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    this.isAddNewVIsible = true;
  }

  closeModal() {
    this.isAddNewVIsible = false;
  }

  openMore() {
    this.isMoreOpen = !this.isMoreOpen;
  }

  getSelectedProducts(products: any) {
    return products.filter(p => p.selected).length;
  }

  deleteSelected() {
    this.store.dispatch(deleteSelected());
    this.openMore();
  }
}
