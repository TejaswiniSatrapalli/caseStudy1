// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AdminService } from 'src/app/services/admin.service';
// import { AlertService } from 'src/app/services/alert.service';

// @Component({
//   selector: 'app-customer-money-convert-page',
//   templateUrl: './customer-money-convert-page.component.html',
//   styleUrls: ['./customer-money-convert-page.component.scss']
// })
// export class CustomerMoneyConvertPageComponent {

//   rateList: any[] = [];
//   constructor(
//     private admin: AdminService,
//     private alert: AlertService

//   ) { }

//   ngOnInit() {
//     this.admin.getRates().subscribe((res: any) => {
//       this.rateList = res || [];
//     });
//   }

//   onSubmit(ngForm: NgForm) {
//     const credentials = ngForm.form.value;
//     this.admin.convertRate(credentials).subscribe((res: any) => {
//       this.alert.success("Converted Amount is <h3 class='text-danger'>" + res?.data + "</h3>");

//     }, this.alert.apiFail);
//     ngForm.resetForm();
//   }
// }


import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';


interface ExchangeRate {
  country: string;
  code: string;
  rate: number;
}

@Component({
  selector: 'app-customer-money-convert-page',
  templateUrl: './customer-money-convert-page.component.html',
  styleUrls: ['./customer-money-convert-page.component.scss']
})
export class CustomerMoneyConvertPageComponent {


  exchangeRates: ExchangeRate[] = [
    { country: 'India', code: 'INR', rate: 80.0 },
    { country: 'USA', code: 'USD', rate: 1.0 },
    { country: 'UK', code: 'GBP', rate: 0.75 },
    { country: 'France', code: 'EUR', rate: 0.85 },
    { country: 'Japan', code: 'JPY', rate: 110.0 }
  ];

  amount: number = 1500; 
  fromCountry: string = 'USD'; 
  toCountry: string = 'INR'; 
  totalFee: number | null = null;
  recipientAmount: number | null = null;

  onCountryChange(type: string): void {
    if (this.fromCountry && this.toCountry && this.amount) {
      const fromRate = this.exchangeRates.find(rate => rate.code === this.fromCountry)?.rate;
      const toRate = this.exchangeRates.find(rate => rate.code === this.toCountry)?.rate;

      if (fromRate && toRate) {
        const ourFee = this.amount * 0.1;
        this.totalFee = this.amount - ourFee; 
        const recipientReceives = (this.totalFee / fromRate) * toRate; 
        this.recipientAmount = recipientReceives;
      } else {
        console.error('Invalid country selection.');
      }
    }
  }

  getCurrencySymbol(currencyCode: string): string {
    switch (currencyCode) {
      case 'INR':
        return '₹';
      case 'USD':
        return '$';
      case 'GBP':
        return '£';
      case 'EUR':
        return '€';
      case 'JPY':
        return '¥';
      default:
        return '';
    }
  }


  rateList: any[] = [];

  constructor(
    private admin: AdminService,
    private alert: AlertService
  ) { }

  ngOnInit() {

    this.onCountryChange('from');
    // this.admin.getRates().subscribe((res: any) => {
    //   this.rateList = res || [];
    // });
  }

  onSubmit(ngForm: NgForm) {
    const credentials = ngForm.form.value;
    this.admin.convertRate(credentials).subscribe((res: any) => {
      this.alert.success("Converted Amount is <h3 class='text-danger'>" + res?.data + "</h3>");
    }, this.alert.apiFail);
    ngForm.resetForm();
  }
}



