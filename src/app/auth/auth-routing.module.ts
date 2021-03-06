import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
