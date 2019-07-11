import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.scss']
})
export class ProcessCardComponent{

  @Input() title: string;
  @Input() text: string;
  @Input() icon: string;

}
