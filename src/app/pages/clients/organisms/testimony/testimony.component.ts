import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent {
  @Input () title: string;
  @Input () companyLogo: string;
}
