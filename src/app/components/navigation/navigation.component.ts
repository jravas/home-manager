import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { EvenetEmmiterService } from 'app/services/evenet-emmiter.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    private router: Router,
    private eventEmiterService: EvenetEmmiterService
  ) {}

  ngOnInit() {
    // this.router.events.subscribe((event: Event) => {
    //   console.log(event);
    // });
  }

  openModal() {
    this.eventEmiterService.addProduct();
  }
}
