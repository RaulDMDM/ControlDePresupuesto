import { Component, Input } from '@angular/core';
import { OperationInterface } from 'src/app/interfaces/operation.interface';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent{
  
  @Input()
  incomeList:OperationInterface[] = [];

}
