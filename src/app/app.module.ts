import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common';
import { NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { CcLibModule } from '@thangducnguyen/cc-lib';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbButtonsModule,
    CcLibModule,
  ],
  providers: [AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
