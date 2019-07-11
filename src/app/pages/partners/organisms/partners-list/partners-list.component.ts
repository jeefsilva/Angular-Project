import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss']
})
export class PartnersListComponent {
  navigateToPartnerForm() {
    window.location.href = environment.partnerFormURL;
  }
}
