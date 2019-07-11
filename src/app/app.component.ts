import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  isPopState = false;

  constructor(private router: Router, private locStrategy: LocationStrategy) { }

  ngOnInit(): void {
    this.locStrategy.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }

      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });
  }
}
