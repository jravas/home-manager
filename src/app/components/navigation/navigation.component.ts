import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { EvenetEmmiterService } from '../../services/evenet-emmiter.service';

enum ActiveRoute {
  Product = '/product',
  AddProduct = '/product-add',
  AddToStock = '/stock-add'
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit, OnDestroy {
  rotuerSubscription: Subscription;
  activeRoute: string;
  ARoute = ActiveRoute;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventEmiterService: EvenetEmmiterService
  ) {}

  ngOnInit() {
    this.rotuerSubscription = this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        switch (val.url) {
          case ActiveRoute.Product:
            this.activeRoute = ActiveRoute.Product;
            break;
          case ActiveRoute.AddProduct:
            this.activeRoute = ActiveRoute.AddProduct;
            break;
          case ActiveRoute.AddToStock:
            this.activeRoute = ActiveRoute.AddToStock;
            break;
          default:
            this.activeRoute = '';
            break;
        }
      }
    });
  }

  ngOnDestroy() {
    this.rotuerSubscription.unsubscribe();
  }

  submit() {
    this.eventEmiterService.submitForm();
  }

  // openModal() {
  //   this.eventEmiterService.addProduct();
  // }
}
