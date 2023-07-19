import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService, private alert: AlertService, private router: Router) { }

  register(data: any, role: string) {
    const isAdmin = role === 'ADMIN';
    this.api.post(isAdmin ? '/admin/save' : '/user/save', data).subscribe((res: any) => {
      this.alert.success(res?.message || 'Registration successful.')
    }, this.alert.apiFail);
  }

  login(data: any, role: string) {
    const isAdmin = role === 'ADMIN';
    this.api.post(isAdmin ? '/admin/login' : `/user/login`, data).subscribe((res: any) => {
      if (!res?.success) {
        this.alert.error("Wrong credentials");
        return;
      }
      sessionStorage.setItem('SESSION_USER_DATA', JSON.stringify(res?.data));
      sessionStorage.setItem('SESSION_ROLE', role);
      if (isAdmin)
        this.router.navigateByUrl("/admin")
      else
        this.router.navigateByUrl("/customer")

    }, this.alert.apiFail);
  }

  getAdminId() {
    const admin = this.getUserDetails();
    return admin?.adminId;
  }

  getUserDetails() {
    console.log('DA')
    return JSON.parse(sessionStorage.getItem('SESSION_USER_DATA') || '');
  }

  sendForgotOTP(email: string, role: string) {
    const isAdmin = role === 'ADMIN';
    return this.api.post(isAdmin ? `/admin/sendEmail` : `/user/sendEmail`, { email });
  }

  forgotPassword(payload: any, role: string) {
    const isAdmin = role === 'ADMIN';
    this.api.put(isAdmin ? `/admin/forgot-password` : `/user/forgot-password`, payload).subscribe(this.alert.apiSuccess, this.alert.apiFail);
  }


}
