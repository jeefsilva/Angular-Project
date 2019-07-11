import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {
  @Input() content: string;

  constructor() {
  }

  ngOnInit() {
  }
}
