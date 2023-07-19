import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-profile-page',
  templateUrl: './customer-profile-page.component.html',
  styleUrls: ['./customer-profile-page.component.scss']
})
export class CustomerProfilePageComponent {
  constructor(
    private auth: AuthService,
    private customer: CustomerService
  ) { }
  userDetails: any = {
    usersId: 0,
    name: "",
    location: "",
    gender: "",
    email: "",
    mobileNo: ""
  }
  ngOnInit() {
    this.userDetails = this.auth.getUserDetails();
  }
  onSubmit(ngForm: NgForm) {
    this.customer.resetPassword({
      ...ngForm.form.value,
      email: this.userDetails.email,
    });

  }
}
