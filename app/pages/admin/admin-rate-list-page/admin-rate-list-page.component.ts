import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-rate-list-page',
  templateUrl: './admin-rate-list-page.component.html',
  styleUrls: ['./admin-rate-list-page.component.scss']
})
export class AdminRateListPageComponent {
  rateList: any[] = [];
  selectedRate: any = {
    fromCurrency: '',
    toCurrency: '',
    rate: '',
    date: '',
    id: 0,
  }
  constructor(
    private admin: AdminService
  ) { }

  ngOnInit() {
    this.admin.getRates().subscribe((res: any) => {
      this.rateList = res || [];
    });
  }

  onSubmit(ngForm: NgForm) {
    this.admin.updateRate(ngForm.form.value);
    document.getElementById('modal-close-btn')?.click();
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }

  onSelect(item: any) {
    this.selectedRate = { ...item };
  }

}
