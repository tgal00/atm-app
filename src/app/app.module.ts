import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AtmComponent } from './atm/atm.component';
import { AtmListComponent } from './atm/atm-list/atm-list.component';
import { AtmDetailComponent } from './atm/atm-detail/atm-detail.component';
import { AtmNewComponent } from './atm/atm-new/atm-new.component';
import { AtmEditComponent } from './atm/atm-edit/atm-edit.component';








@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AtmComponent,
    AtmListComponent,
    AtmDetailComponent,
    AtmNewComponent,
    AtmEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
