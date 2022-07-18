import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ATMType } from 'src/app/data/atm.model';
import { MOCK_ATM_TYPE } from 'src/app/data/mockATMs';
import { ATMService } from '../atm.service';

@Component({
  selector: 'app-atm-new',
  templateUrl: './atm-new.component.html',
  styleUrls: ['./atm-new.component.css']
})
export class AtmNewComponent implements OnInit {

  atmTypes:ATMType[] = MOCK_ATM_TYPE;

  form = new FormGroup({
    address: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    annotation: new FormControl('', [Validators.required])
  });

  constructor(private atmService:ATMService, private router:Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    if(this.form.valid){
      const address=this.form.value.address;
      const type=this.form.value.type;
      const annotation=this.form.value.annotation;

      this.atmService.addATM(address as string, type as unknown as ATMType, annotation as string)
      this.router.navigate([""]);
    }
  }

}
