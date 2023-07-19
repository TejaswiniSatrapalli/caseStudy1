import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add-bank-account-page',
  templateUrl: './customer-add-bank-account-page.component.html',
  styleUrls: ['./customer-add-bank-account-page.component.scss']
})
export class CustomerAddBankAccountPageComponent {
  selectedUser: any = {
    name: ''
  }
  bankDetails: any = {
    accountHolderName: '',
    accountNumber: 0,
    bankName: '',
    contactnumber: '',
    ifscCode: '',
  };
  bankAvail = false;

  constructor(
    private auth: AuthService,
    private admin: AdminService,
    private customer: CustomerService
  ) { }




  ngOnInit() {
    this.selectedUser = { ...this.auth.getUserDetails() };
    this.customer.getMyBank().subscribe((res: any) => {
      if (res.data) {
        this.bankAvail = true;
        this.bankDetails = res?.data;
      }
    });
  }

  onSubmit(ngForm: NgForm) {
    let credentials: any = {}

    if (this.bankAvail) credentials = { ...this.bankDetails };
    else credentials = ngForm.form.value;
    credentials.accountHolderName = this.selectedUser?.name;
    credentials.userId = this.selectedUser.usersId;
    if (this.bankAvail) this.admin.updateBankAccount(credentials);
    else this.admin.addBankAccount(credentials);
    ngForm.resetForm();
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }

  onReset() {
    this.ngOnInit();
  }
}
