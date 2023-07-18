import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-add-rate-page',
  templateUrl: './admin-add-rate-page.component.html',
  styleUrls: ['./admin-add-rate-page.component.scss']
})
export class AdminAddRatePageComponent {

  constructor(
    private auth: AuthService,
    private admin: AdminService
  ) { }

  onSubmit(ngForm: NgForm) {
    const credentials = ngForm.form.value;
    credentials.adminId = this.auth.getAdminId();
    this.admin.addRate(credentials);
    ngForm.resetForm();
  }
}
