import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './services/http-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { InfoUserComponent } from './pages/info-user/info-user.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { BankInputComponent } from './cmps/bank-input/bank-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SignupComponent,
    InfoUserComponent,
    AccountPageComponent,
    BankInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
