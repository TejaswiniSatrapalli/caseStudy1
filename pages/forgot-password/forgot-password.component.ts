import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  showOTP = false;
  email: string = '';

  constructor(
    private auth: AuthService,
    private alert: AlertService
  ) { }

  onSubmit(ngForm: NgForm, role: string) {

    const credentials = ngForm.form.value;
    console.log(credentials);
    this.auth.forgotPassword(credentials, role);

  }

  onSendOtp(email: string, role: string) {
    this.email = email;
    this.auth.sendForgotOTP(email, role).subscribe((res: any) => {
      this.showOTP = true;
      this.alert.apiSuccess(res);
    }, this.alert.apiFail);
  }
}
