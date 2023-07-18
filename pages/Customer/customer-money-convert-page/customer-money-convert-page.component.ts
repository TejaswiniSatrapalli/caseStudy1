import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-customer-money-convert-page',
  templateUrl: './customer-money-convert-page.component.html',
  styleUrls: ['./customer-money-convert-page.component.scss']
})
export class CustomerMoneyConvertPageComponent {

  rateList: any[] = [];
  constructor(
    private admin: AdminService,
    private alert: AlertService

  ) { }

  ngOnInit() {
    this.admin.getRates().subscribe((res: any) => {
      this.rateList = res || [];
    });
  }

  onSubmit(ngForm: NgForm) {
    const credentials = ngForm.form.value;
    this.admin.convertRate(credentials).subscribe((res: any) => {
      this.alert.success("Converted Amount is <h3 class='text-danger'>" + res?.data + "</h3>");

    }, this.alert.apiFail);
    ngForm.resetForm();
  }
}
