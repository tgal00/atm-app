import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmEditComponent } from './atm/atm-edit/atm-edit.component';

import { AtmNewComponent } from './atm/atm-new/atm-new.component';
import { AtmComponent } from './atm/atm.component';
import { RoleAuthGuard } from './atm/roleAuth.guard';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: "home", component: AtmComponent, canActivate: [AuthGuard], children:[
      {path:"new",component:AtmNewComponent,canActivate: [RoleAuthGuard]},
      {path:"edit/:id",component:AtmEditComponent,canActivate: [RoleAuthGuard]}
    ]
      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
