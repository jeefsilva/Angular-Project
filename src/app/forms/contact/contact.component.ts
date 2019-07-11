import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'app/@shared/form/custom-validators';
import { Contact } from 'app/@shared/form/contact.model';
import { FormService } from 'app/@shared/form/form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formService: FormService;
  contactForm: FormGroup;
  contact: Contact = new Contact();
  customValidators = CustomValidators;
  confirmEmail: string;

  constructor(formService: FormService, formBuilder: FormBuilder) {
    this.formService = formService;
    this.contactForm = formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      confirmEmail: ["", Validators.compose([Validators.required, Validators.email])],
      phone: ["", Validators.required],
      company: ["", Validators.required],
      role: ["", Validators.required],
      section: ["", Validators.required],
      message: ["", Validators.required]
    }, {validator: CustomValidators.equalTextValidator('email', 'confirmEmail')});
  }

  ngOnInit() {
  }

  saveForm() {
    this.formService.save(this.contact, "contact").subscribe();

    this.contact = new Contact();
    this.contactForm.reset();
  }
}
