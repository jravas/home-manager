import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  MatDialog,
  MatDialogConfig,
  DialogPosition
} from '@angular/material/dialog';
import { ProductAddComponent } from '../../components/product-add/product-add.component';
import { EvenetEmmiterService } from 'app/services/evenet-emmiter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<any>;

  constructor(
    private store: Store<{ products: any }>,
    private evenetEmmiterService: EvenetEmmiterService,
    public dialog: MatDialog
  ) {
    this.products = this.store.pipe(select('products'));
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'add-product-modal';
    const dialogRef = this.dialog.open(ProductAddComponent, {
      // width: '100%',
      // panelClass: 'add-product-modal',
      backdropClass: 'add-product-modal-wrapper'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.evenetEmmiterService.addProductEvent.subscribe((event: Event) => {
      this.openDialog();
    });
  }
}
