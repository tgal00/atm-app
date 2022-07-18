import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { ATM, ATMType } from "../data/atm.model";
import { MOCK_ATMS } from "../data/mockATMs";

@Injectable({
  providedIn: 'root'
})
export class ATMService{

  private atmList:ATM[] = MOCK_ATMS;;
  atmChanges = new Subject<ATM[]>();
  private atmId = this.atmList.length;

  constructor(private router:Router){}

  getATMs(){
    return this.atmList.slice();
  }

  getATM(id:number){
    return this.atmList[this.atmList.findIndex(b => b.id==id)];
  }

  setAtms(atm:ATM[]){
    this.atmList=atm;
    this.atmChanges.next(this.atmList.slice());
  }

  addATM(address:string, type:ATMType, annotation:string){
    this.atmId+=1;
    const newATM={id:this.atmId,type:type,annotation:annotation,address:address}
    this.atmList.push(newATM);
    this.atmChanges.next(this.atmList.slice());
  }

  deleteAtm(id:number){
    this.atmList=this.atmList.filter(b => b.id != id);
    this.atmChanges.next(this.atmList.slice());
  }

  editAtm(id:number,atm:ATM){
    this.atmList[this.atmList.findIndex(b => b.id==id)] = atm;
    this.atmChanges.next(this.atmList.slice());
    this.router.navigate([""])
  }
}