import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AlertService } from './alert.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private auth: AuthService
  ) { }

  getMyBank() {
    const user = this.auth.getUserDetails();
    return this.api.get(`/bank-details/${user.usersId}`);
  }

  sendMoney(payload: any) {
    this.api.post('/transaction/save', payload).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }

  getMyTransactions() {
    const userId = this.auth.getUserDetails()?.usersId;
    return this.api.get(`/transaction/byUserId/${userId}`);
  }

  resetPassword(payload: any) {
    this.api.put(`/user/reset-password`, payload).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }

}
