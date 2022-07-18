import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, UntypedFormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ATM, ATMType } from 'src/app/data/atm.model';
import { MOCK_ATM_TYPE } from 'src/app/data/mockATMs';
import { ATMService } from '../atm.service';

@Component({
  selector: 'app-atm-edit',
  templateUrl: './atm-edit.component.html',
  styleUrls: ['./atm-edit.component.css']
})
export class AtmEditComponent implements OnInit {

  atm!:ATM;
  form!:NgForm;
  address!:string;
  annotation!:string;
  type!:string;
  atmTypes:ATMType[] = MOCK_ATM_TYPE;
  id!:number;

  constructor(private route:ActivatedRoute, private atmService:ATMService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(res => {
      this.id = res["id"];
      this.atm = this.atmService.getATM(this.id);
      this.address = this.atm.address;
      this.annotation = this.atm.annotation;
      this.type=this.atm.type.type;
    })
  }

  onEdit(){
    const type=MOCK_ATM_TYPE[MOCK_ATM_TYPE.findIndex(t => t.type==this.type)]
    const newAtm:ATM={id:this.id,address:this.address,annotation:this.annotation,type:type}
    this.atmService.editAtm(this.id, newAtm);
  }

}
