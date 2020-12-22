import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component'
import { InfoUserComponent } from './pages/info-user/info-user.component'
import { AccountPageComponent } from './pages/account-page/account-page.component'

const routes: Routes = [

  { path: 'account', component: AccountPageComponent },
  { path: 'info', component: InfoUserComponent },
  { path: 'signup', component: MainPageComponent },
  { path: '**', redirectTo: '/signup'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



