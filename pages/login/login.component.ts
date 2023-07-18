import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginDTO } from 'src/app/interfaces';

import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private alert: AlertService,
    private auth: AuthService
  ) { }

  onSubmit(ngForm: NgForm, role: string) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials = ngForm.form.value;
    this.auth.login(credentials, role);

  }
}
