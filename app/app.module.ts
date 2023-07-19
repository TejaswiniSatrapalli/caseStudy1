import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';

import { AdminService } from './services/admin.service';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { AdminAddRatePageComponent } from './pages/admin/admin-add-rate-page/admin-add-rate-page.component';
import { AdminRateListPageComponent } from './pages/admin/admin-rate-list-page/admin-rate-list-page.component';
import { AdminUsersListPageComponent } from './pages/admin/admin-users-list-page/admin-users-list-page.component';
import { AdminProfilePageComponent } from './pages/admin/admin-profile-page/admin-profile-page.component';
import { AdminAddBankAccountPageComponent } from './pages/admin/admin-add-bank-account-page/admin-add-bank-account-page.component';
import { CustomerAddBankAccountPageComponent } from './pages/Customer/customer-add-bank-account-page/customer-add-bank-account-page.component';
import { CustomerProfilePageComponent } from './pages/Customer/customer-profile-page/customer-profile-page.component';
import { CustomerTransferMoneyPageComponent } from './pages/Customer/customer-transfer-money-page/customer-transfer-money-page.component';
import { CustomerMoneyConvertPageComponent } from './pages/Customer/customer-money-convert-page/customer-money-convert-page.component';
import { CustomerTransactionsPageComponent } from './pages/Customer/customer-transactions-page/customer-transactions-page.component';
import { CustomerService } from './services/customer.service';
import { AdminTransactionListPageComponent } from './pages/admin/admin-transaction-list-page/admin-transaction-list-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CustomerRateListPageComponent } from './pages/Customer/customer-rate-list-page/customer-rate-list-page.component';




import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { GraphComponent } from './pages/graph/graph.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BasicComponent,
    AdminComponent,
    CustomerLayoutComponent,
    AdminAddRatePageComponent,
    AdminRateListPageComponent,
    AdminUsersListPageComponent,
    AdminProfilePageComponent,
    AdminAddBankAccountPageComponent,
    CustomerAddBankAccountPageComponent,
    CustomerProfilePageComponent,
    CustomerTransferMoneyPageComponent,
    CustomerMoneyConvertPageComponent,
    CustomerTransactionsPageComponent,
    AdminTransactionListPageComponent,
    ForgotPasswordComponent,
    CustomerRateListPageComponent,
    GraphComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [
    AlertService,
    ApiService,
    AuthService,
    AdminService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
