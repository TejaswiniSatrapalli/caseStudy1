import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';



import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { AdminAddRatePageComponent } from './pages/admin/admin-add-rate-page/admin-add-rate-page.component';
import { AdminRateListPageComponent } from './pages/admin/admin-rate-list-page/admin-rate-list-page.component';
import { AdminUsersListPageComponent } from './pages/admin/admin-users-list-page/admin-users-list-page.component';
import { AdminProfilePageComponent } from './pages/admin/admin-profile-page/admin-profile-page.component';
import { AdminAddBankAccountPageComponent } from './pages/admin/admin-add-bank-account-page/admin-add-bank-account-page.component';
import { CustomerAddBankAccountPageComponent } from './pages/Customer/customer-add-bank-account-page/customer-add-bank-account-page.component';
import { CustomerMoneyConvertPageComponent } from './pages/Customer/customer-money-convert-page/customer-money-convert-page.component';
import { CustomerProfilePageComponent } from './pages/Customer/customer-profile-page/customer-profile-page.component';
import { CustomerTransactionsPageComponent } from './pages/Customer/customer-transactions-page/customer-transactions-page.component';
import { CustomerTransferMoneyPageComponent } from './pages/Customer/customer-transfer-money-page/customer-transfer-money-page.component';
import { AdminTransactionListPageComponent } from './pages/admin/admin-transaction-list-page/admin-transaction-list-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CustomerRateListPageComponent } from './pages/Customer/customer-rate-list-page/customer-rate-list-page.component';
import { GraphComponent } from './pages/graph/graph.component';




const routes: Routes = [

  {
    path: '',
    component: BasicComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'graph',
        component:GraphComponent
      },

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },

    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard, AdminGuard],
    // canActivateChild: [AuthGuard, AdminGuard],
    children: [
      // {
      //   path: '',
      //   component: HomeComponent
      // },
      {
        path:'',
        component:GraphComponent
      },
      // {
      //   path:'graph',
      //   component:GraphComponent

      // },

      {
        path: 'add-rate',
        component: AdminAddRatePageComponent
      },
      {
        path: 'rate-list',
        component: AdminRateListPageComponent
      },
      {
        path: 'user-list',
        component: AdminUsersListPageComponent
      },
      {
        path: 'transaction-list',
        component: AdminTransactionListPageComponent
      },
      {
        path: 'add-bank-account',
        component: AdminAddBankAccountPageComponent
      },
      {
        path: 'profile',
        component: AdminProfilePageComponent
      },
      {
        path: 'money-convert',
        component: CustomerMoneyConvertPageComponent
      },
    

    ]
  },
  {
    path: 'customer',
    component: CustomerLayoutComponent,
    // canActivate: [AuthGuard, StaffGuard],
    // canActivateChild: [AuthGuard, StaffGuard],
    children: [
      // {
      //   path: '',
      //   component: HomeComponent
      // },
      {
        path:'',
        component:GraphComponent
      },

      {
        path: 'add-bank-account',
        component: CustomerAddBankAccountPageComponent
      },
      {
        path: 'money-convert',
        component: CustomerMoneyConvertPageComponent
      },
      {
        path: 'rate-list',
        component: CustomerRateListPageComponent
      },

      {
        path: 'my-transactions',
        component: CustomerTransactionsPageComponent
      },
      {
        path: 'transfer-money',
        component: CustomerTransferMoneyPageComponent
      },
      {
        path: 'profile',
        component: CustomerProfilePageComponent
      },
    
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
