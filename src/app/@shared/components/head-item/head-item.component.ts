import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-head',
  templateUrl: './head-item.component.html',
  styleUrls: ['./head-item.component.scss']
})
export class HeadItemComponent {

  @Input() title: string;
  @Input() text: string;

}
