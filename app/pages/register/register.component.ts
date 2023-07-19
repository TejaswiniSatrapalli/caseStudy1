import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private alert: AlertService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Initialize the component
  }

  onSubmit(ngForm: NgForm, role: 'ADMIN' | 'CUSTOMER') {
    if (ngForm.form.invalid) {
      this.alert.error('Please fill in the required elements');
      return;
    }

    const credentials = ngForm.form.value;
    this.auth.register(credentials, role);

    // Registration successful
    this.alert.success('Registration successful');
    ngForm.resetForm();
    this.router.navigateByUrl('/login');
  }
}



