import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products-modeling',
  templateUrl: './modeling.component.html',
  styleUrls: ['./modeling.component.scss']
})
export class ModelingComponent implements OnInit {
  @Input() content: string;

  constructor() {
  }

  ngOnInit() {
  }
}
