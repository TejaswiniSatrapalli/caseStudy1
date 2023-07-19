import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { APP_NAME } from 'src/constants';
// import { ConfirmationDialogComponent } from './confirmationDialog';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent {
  APP_NAME = APP_NAME;
  constructor(private router: Router) { }
  onLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }
}


//   constructor(private router: Router, private dialog: MatDialog) { }

//   onLogout(): void {
//     const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
//       width: '300px',
//       data: 'Are you sure you want to logout?'
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result === true) {
//         // Clear session storage
//         sessionStorage.clear();
//         // Navigate to the login page
//         this.router.navigateByUrl('/');
//       } else {
//         console.log('Logout canceled.');
//         // Logout canceled, do nothing
//       }
//     });
//   }
// }

