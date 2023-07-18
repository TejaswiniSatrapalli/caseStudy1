import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public APP_NAME = APP_NAME;
  constructor(private router: Router) { }
  onLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
