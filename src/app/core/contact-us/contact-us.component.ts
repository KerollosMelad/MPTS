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
      Name: `<br> <div style="text-align:center;">  <b> ${formData.name} </b> </div> `,
      Phone: `<br> <div style="text-align:center;"> <b> ${formData.phoneNumber} </b> </div>`,
      Email: `<br> <div style="text-align:center;"> <b> ${formData.name} </b> </div>`,
      Inquiry: `<br> <div style="text-align:center;"> <b> ${formData.inquiry} </b> </div>`,
    };

    this.contactService.SendEmail(emailData).subscribe({
      next: (data) => {
        location.href = 'https://mailthis.to/confirm'
      }
    });

  }
}
