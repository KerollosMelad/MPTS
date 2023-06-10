import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formData: FormGroup;
  constructor(private builder: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      name: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.maxLength(20),]),
      email: new FormControl('', [Validators.email]),
      inquiry: new FormControl('')
    });

  }

  onSubmit(formData) {
    const emailData = {
      'Subject': formData.email,
      'Name': formData.name,
      'Phone Number': formData.phoneNumber,
      'Inquiry': formData.inquiry
    };

    this.contactService.SendEmail(emailData).subscribe({
      next: data => location.href = 'https://mailthis.to/confirm'
    });

  }
}
