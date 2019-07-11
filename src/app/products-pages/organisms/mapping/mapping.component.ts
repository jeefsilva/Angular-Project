import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {
  @Input() content: string;

  constructor() {
  }

  ngOnInit() {
  }
}
