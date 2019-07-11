import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-partners-card',
  templateUrl: './partners-card.component.html',
  styleUrls: ['./partners-card.component.scss']
})
export class PartnersCardComponent {

  @Input() imgSource: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() text: string;

}
