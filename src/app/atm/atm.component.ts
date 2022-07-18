import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

  getUser(){
    return this.auth.getUser();
  }

}
