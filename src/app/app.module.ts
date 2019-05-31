import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxCclibModule} from 'ngx-cclib';
import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbButtonsModule,
    NgxCclibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
