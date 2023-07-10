import { Component } from '@angular/core';
import { OperationInterface } from './interfaces/operation.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controlDePresupuesto';
  incomeListParent:OperationInterface[] = [];
  expensesListParent:OperationInterface[] = [];
  incomeAmountParent:number;
  expensesAmountParent:number;
}
