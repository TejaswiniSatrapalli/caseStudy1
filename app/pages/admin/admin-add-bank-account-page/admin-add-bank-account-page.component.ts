import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-add-bank-account-page',
  templateUrl: './admin-add-bank-account-page.component.html',
  styleUrls: ['./admin-add-bank-account-page.component.scss']
})
export class AdminAddBankAccountPageComponent {
  userList: any[] = [];
  selectedUser: any = {
    name: ''
  }

  constructor(
    private auth: AuthService,
    private admin: AdminService
  ) { }


  ngOnInit() {
    this.admin.getUsers().subscribe((res: any) => {
      this.userList = res || [];
    });
  }

  onSubmit(ngForm: NgForm) {
    const credentials = ngForm.form.value;
    credentials.accountHolderName = this.selectedUser?.name;
    this.admin.addBankAccount(credentials);
    ngForm.resetForm();
  }
  onUserSelect(userId: any) {
    this.selectedUser = { ...this.userList.filter(item => item?.usersId == userId)[0] };
    console.log(this.selectedUser)
  }
}
