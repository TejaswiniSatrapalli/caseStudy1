import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }


  addRate(payload: any) {
    this.api.post(`/admin/exchangeRate/save`, payload).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }
  addBankAccount(payload: any) {
    this.api.post(`/UserBankDetails/save`, payload).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }
  updateBankAccount(payload: any) {
    this.api.put(`/UserBankDetails/update`, payload).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }
  getRates() {
    return this.api.get(`/admin/rate/all`);
  }
  getUsers() {
    return this.api.get('/admin/users/all');
  }
  getAllTransactions() {
    return this.api.get('/transaction/all');
  }
  convertRate(payload: any) {
    return this.api.post('/rate/convert', payload);
  }
  resetPassword(payload: any) {
    this.api.put(`/admin/reset-password`, payload).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }

  deleteUser(userId: any) {
    this.api.delete(`/user/delete/${userId}`).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }

  getDownloadReportUrl(transactionId: any) {
    return this.api.baseUrl() + `/report/${transactionId}`;
  }


  updateRate(payload: any) {
    this.api.put(`/exchangeRate/update`, payload).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }

}
