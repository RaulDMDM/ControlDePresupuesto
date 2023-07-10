import { Component, Input } from '@angular/core';
import { OperationInterface } from 'src/app/interfaces/operation.interface';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  
  @Input()
  expensesList:OperationInterface [] = []
}
