import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-profile-page',
  templateUrl: './admin-profile-page.component.html',
  styleUrls: ['./admin-profile-page.component.scss']
})
export class AdminProfilePageComponent {
  constructor(
    private auth: AuthService,
    private admin: AdminService
  ) { }
  adminDetails: any = {
    adminId: 0,
    adminName: '',
    adminEmail: '',
    adminUsername: '',
  }
  ngOnInit() {
    this.adminDetails = this.auth.getUserDetails();
  }
  onSubmit(ngForm: NgForm) {
    this.admin.resetPassword({
      ...ngForm.form.value,
      email: this.adminDetails.adminEmail,
    });

  }
}
