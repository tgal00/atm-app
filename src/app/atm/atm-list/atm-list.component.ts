import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { ATM } from 'src/app/data/atm.model';
import { MOCK_ATM_TYPE } from 'src/app/data/mockATMs';
import { User } from 'src/app/data/user.model';
import { ATMService } from '../atm.service';

@Component({
  selector: 'app-atm-list',
  templateUrl: './atm-list.component.html',
  styleUrls: ['./atm-list.component.css']
})
export class AtmListComponent implements OnInit, OnDestroy {

  subscription:Subscription = new Subscription();
  atms:ATM[] = [];
  selectedAtm:ATM|undefined;
  hideDetails:boolean = false;

  filterAddress:string = "";
  filterType:string= "default";
  atmTypes=MOCK_ATM_TYPE;

  userRole!:string;

 constructor(private atmSerivce:ATMService, private router:Router, private route:ActivatedRoute, private auth:AuthService) { }

 ngOnInit(): void {
    this.subscription = this.atmSerivce.atmChanges.subscribe(res => this.atms=res);
    this.atms = this.atmSerivce.getATMs();
    this.userRole = this.auth.getUserRole() as string;
 }

 onSelectAtm(atm:ATM){

  this.selectedAtm=atm;
 }

 onFilter(){
  this.atms = this.atmSerivce.getATMs();
  if(this.filterAddress.length>0){
    
    this.atms= this.atms.filter(b => b.address.includes(this.filterAddress as string)).slice();
  }
  if(this.filterType!="default"){
    this.atms=this.atms.filter(b => b.type.id==+this.filterType)
  }
 }

 onDelete(id:number){
  this.atmSerivce.deleteAtm(id);
  this.filterAddress="";
  this.filterType="default";
  this.selectedAtm=undefined;
 }

 ngOnDestroy(): void {
    
  this.subscription.unsubscribe();
 }

}
