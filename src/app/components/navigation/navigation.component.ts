import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EvenetEmmiterService } from '../../services/evenet-emmiter.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(
    private router: Router,
    private eventEmiterService: EvenetEmmiterService
  ) {}

  ngOnInit() {
    this.subscription = this.eventEmiterService.showActionsEvent.subscribe(
      e => {
        console.log('bla');
      }
    );
  }

  ngOnDestroy() {}

  // openModal() {
  //   this.eventEmiterService.addProduct();
  // }
}
