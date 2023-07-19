import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-transfer-money-page',
  templateUrl: './customer-transfer-money-page.component.html',
  styleUrls: ['./customer-transfer-money-page.component.scss']
})
export class CustomerTransferMoneyPageComponent {
  rateList: any[] = [];
  bankDetails: any = {
    accountHolderName: '',
    accountNumber: 0,
  };
  constructor(
    private customer: CustomerService,
    private admin: AdminService,
    private alert: AlertService

  ) { }

  ngOnInit() {
    this.admin.getRates().subscribe((res: any) => {
      this.rateList = res || [];
    });

    this.customer.getMyBank().subscribe((res: any) => {
      if (!res.data) {
        this.alert.error("Your bank not added please add first")
      } else
        this.bankDetails = res?.data;

    });
  }

  onSubmit(ngForm: NgForm) {
    const credentials = ngForm.form.value;
    credentials.transactionDate = new Date().toISOString();
    this.customer.sendMoney(credentials);
    ngForm.resetForm();

  }
}
