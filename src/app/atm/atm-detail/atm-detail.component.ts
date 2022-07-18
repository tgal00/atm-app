import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ATM } from 'src/app/data/atm.model';

@Component({
  selector: 'app-atm-detail',
  templateUrl: './atm-detail.component.html',
  styleUrls: ['./atm-detail.component.css']
})
export class AtmDetailComponent implements OnInit {

  @Input() atm!:ATM;
  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    
  }

  onClose(){
    this.close.emit(true);
  }

}
