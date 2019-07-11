import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-improvement',
  templateUrl: './improvement.component.html',
  styleUrls: ['./improvement.component.scss']
})
export class ImprovementComponent implements OnInit {
  @Input() content: string;

  constructor() {
  }

  ngOnInit() {
  }
}
