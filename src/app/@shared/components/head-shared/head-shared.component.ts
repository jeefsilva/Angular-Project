import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-shared',
  templateUrl: './head-shared.component.html',
  styleUrls: ['./head-shared.component.scss']
})
export class HeadSharedComponent  {

  @Input() title: string;
  @Input() text: string;
  @Input() button: boolean;
}
