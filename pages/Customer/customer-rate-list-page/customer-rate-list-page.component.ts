import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-customer-rate-list-page',
  templateUrl: './customer-rate-list-page.component.html',
  styleUrls: ['./customer-rate-list-page.component.scss']
})
export class CustomerRateListPageComponent {
  rateList: any[] = [];

  constructor(
    private admin: AdminService
  ) { }

  ngOnInit() {
    this.admin.getRates().subscribe((res: any) => {
      this.rateList = res || [];
    });
  }
}
