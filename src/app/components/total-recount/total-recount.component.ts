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
  }

  getTotal(){
    this.total = this.incomeAmount - this.expensesAmount;
  }
}


