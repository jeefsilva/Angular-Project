import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  @Input() photo: string;
  @Input() name: string;
  @Input() title: string;

  constructor() {}
}
