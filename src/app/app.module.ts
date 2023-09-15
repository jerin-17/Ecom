import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ProductContainerModule } from './product-container/product-container.module';
import { UserAuthService } from './services/user-auth.service';
import { SignupPageComponent } from './signup-page/signup-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CapitalizePipe,
    ProductContainerModule,
    FormsModule
  ],
  providers: [UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
