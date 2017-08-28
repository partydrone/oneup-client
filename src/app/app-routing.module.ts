import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
