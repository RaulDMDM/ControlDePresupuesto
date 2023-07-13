import { Component, Input, DoCheck} from '@angular/core';
import { OperationInterface } from 'src/app/interfaces/operation.interface';

@Component({
  selector: 'app-total-recount',
  templateUrl: './total-recount.component.html',
  styleUrls: ['./total-recount.component.css']
})
export class TotalRecountComponent implements DoCheck{
  
  total:number = 0;
  @Input()
  incomeAmount:number = 0;
  @Input()
  expensesAmount:number = 0;

  ngDoCheck(): void {
    this.getTotal()
    this.incomeAmount = Number(this.incomeAmount?.toFixed(2));
    this.expensesAmount = Number(this.expensesAmount?.toFixed(2));
  }

  getTotal(){

    if(this.incomeAmount && this.expensesAmount == undefined){
      this.total = 0
    }else{
      this.total = Number(this.incomeAmount?.toFixed(2)) - Number(this.expensesAmount?.toFixed(2));
      this.total = Number(this.total.toFixed(2));
    }
    
  }
}


