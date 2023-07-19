import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-transaction-list-page',
  templateUrl: './admin-transaction-list-page.component.html',
  styleUrls: ['./admin-transaction-list-page.component.scss']
})
export class AdminTransactionListPageComponent {
  transactions: any[] = [];
  constructor(
    private admin: AdminService
  ) { }

  ngOnInit() {
    this.admin.getAllTransactions().subscribe((res: any) => {
      this.transactions = res || [];
    });
  }

  getReportUrl(id: any) {
    return this.admin.getDownloadReportUrl(id);
  }
}
