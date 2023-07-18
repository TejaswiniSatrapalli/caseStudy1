import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-users-list-page',
  templateUrl: './admin-users-list-page.component.html',
  styleUrls: ['./admin-users-list-page.component.scss']
})
export class AdminUsersListPageComponent {
  userList: any[] = [];

  constructor(
    private admin: AdminService
  ) { }

  ngOnInit() {
    this.admin.getUsers().subscribe((res: any) => {
      this.userList = res || [];
    });
  }
  onDeleteUser(userId: any) {
    this.admin.deleteUser(userId);
    setTimeout(() => {
      this.ngOnInit();
    }, 1000)
  }
}
