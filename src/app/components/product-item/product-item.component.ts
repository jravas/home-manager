import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IStockItem } from 'src/app/modules/stock/models/stock-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent implements OnInit {
  @Input() item: IStockItem;
  constructor() {}

  ngOnInit() {}
}
