import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as uuid from 'uuid/v1';
import { Subscription } from 'rxjs';
import Quagga from 'quagga';

import { Product, IProduct } from '../../models/product';
import { addProduct } from '../../store/product.actions';
import { State } from '../../store/product.reducer';
import { getProductsWithTag } from '../../store/product.selectors';

import { EvenetEmmiterService } from '../../../../services/evenet-emmiter.service';

interface ProductFormValues {
  name: string;
  tag: string;
  quantity: number;
}
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, OnDestroy {
  @ViewChild('barcode', { read: ElementRef }) barcode: ElementRef;
  productForm = this.fb.group({
    name: [''],
    tag: [''],
    quantity: [1]
  });
  productsSubscription: Subscription;
  products: IProduct[];
  eventSubscription: Subscription;
  scanedCode: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private router: Router,
    private evenetEmmiterService: EvenetEmmiterService
  ) {}

  ngOnInit() {
    this.eventSubscription = this.evenetEmmiterService.submitFormEvent.subscribe(
      () => this.addProduct()
    );
  }

  ngOnDestroy() {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
    this.eventSubscription.unsubscribe();
  }

  initScan() {
    console.log(navigator.hardwareConcurrency);
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: this.barcode.nativeElement
        },
        decoder: {
          readers: ['ean_reader', 'ean_8_reader'],
          debug: {
            showCanvas: true,
            showPatches: true,
            showFoundPatches: true,
            showSkeleton: true,
            showLabels: true,
            showPatchLabels: true,
            showRemainingPatchLabels: true,
            boxFromPatches: {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true
            }
          }
        }
      },
      err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Initialization finished. Ready to start');
        Quagga.start();
      }
    );
    Quagga.onDetected(result => {
      console.log(
        'Barcode detected and processed : [' + result.codeResult.code + ']',
        result
      );
      this.scanedCode = result.codeResult.code;
    });
  }

  addProduct() {
    const { name, tag, quantity } = this.productForm.value as ProductFormValues;
    const product = new Product(uuid(), name, tag, quantity, Date.now());
    this.store.dispatch(addProduct(product));
    this.productForm.reset();
    this.router.navigate(['product']);
  }

  generateTag() {
    const formValue = this.productForm.value as ProductFormValues;
    const productTag = formValue.name.replace(/ /g, '_').toLowerCase();
    this.productForm.controls.tag.setValue(productTag);
    this.getProductsWithTag(productTag);
  }

  getProductsWithTag(tag: string) {
    this.productsSubscription = this.store
      .pipe(select(getProductsWithTag, tag))
      .subscribe((products: IProduct[]) => {
        this.products = products.filter(
          (product, index, self) =>
            index === self.findIndex(p => p.tag === product.tag)
        );
      });
  }
  selectTag(event: MouseEvent, product: IProduct) {
    event.preventDefault();
    this.productForm.controls.tag.setValue(product.tag);
    this.productForm.controls.name.setValue(product.name);
  }

  scanBarcode() {
    this.initScan();
  }
}
