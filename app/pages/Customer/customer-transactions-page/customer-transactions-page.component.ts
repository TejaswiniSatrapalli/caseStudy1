import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-transactions-page',
  templateUrl: './customer-transactions-page.component.html',
  styleUrls: ['./customer-transactions-page.component.scss']
})
export class CustomerTransactionsPageComponent {
  transactions: any[] = [];

  constructor(
    private customer: CustomerService
  ) { }

  ngOnInit() {
    this.customer.getMyTransactions().subscribe((res: any) => {
      this.transactions = res || [];
    });
  }
}
