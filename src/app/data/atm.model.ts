export interface ATM{
  id:number;
  type:ATMType;
  address:string;
  annotation:string;
}

export interface ATMType{
  id:number,
  type:string
}