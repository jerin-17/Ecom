import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductCreatePageComponent } from './product-container/product-create-page/product-create-page.component';

const routes: Routes = [

  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path: 'signup',
    component:SignupPageComponent
  },
  {
    path: 'product',
    component: ProductContainerComponent
  },
  {
    path: 'create',
    component: ProductCreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
