import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperationInterface } from 'src/app/interfaces/operation.interface';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.css']
})
export class NewOperationComponent implements OnInit {

  incomeList:OperationInterface [] = [];
  expensesList:OperationInterface [] = [];
  incomeAmount:number = 0;
  expensesAmount:number = 0;
  newOperation: OperationInterface = {
    date:'',
    description:'',
    amount:undefined
  };

  ngOnInit(): void {
    this.getIncome()
    this.getExpenses()
  }
  
  @Output() incomeListEmiter:EventEmitter<OperationInterface[]> = new EventEmitter<OperationInterface[]>()
  @Output() expensesListEmiter:EventEmitter<OperationInterface[]> = new EventEmitter<OperationInterface[]>()
  @Output() incomeAmountEmiter:EventEmitter<number> = new EventEmitter<number>()
  @Output() expensesAmountEmiter:EventEmitter<number> = new EventEmitter<number>()

  constructor(private operationService:OperationService){}

  addOperation(newOperationForm:NgForm){
    let opType = (<HTMLInputElement>document.getElementById("opType")).value
    
    this.newOperation.amount = Number(this.newOperation.amount?.toFixed(2));
    this.newOperation.date = new Date().toLocaleString();
    console.log(this.newOperation.amount)
    if (opType == '+'){
      this.operationService.setIncome(this.newOperation).subscribe(res =>{
        this.getIncome()
      })
      
    }else{
      this.operationService.setExpenses(this.newOperation).subscribe(res =>{
        this.getExpenses()
    })
    }
  }

  getIncome(){
    this.operationService.getIncome().subscribe((res) => {
      this.incomeList = <any>res;
      this.incomeListEmiter.emit(this.incomeList)

      this.incomeAmount = 0
      this.incomeList.forEach(income => {
        this.incomeAmount = this.incomeAmount + income.amount!
      });
      this.incomeAmountEmiter.emit(this.incomeAmount)
    
    })
  }

  getExpenses(){
    this.operationService.getExpenses().subscribe((res) => {
      this.expensesList = <any>res;
      this.expensesListEmiter.emit(this.expensesList)
      
      this.expensesAmount = 0
      this.expensesList.forEach(expenses => {
        this.expensesAmount = this.expensesAmount + expenses.amount!
      });
      this.expensesAmountEmiter.emit(this.expensesAmount)
    })

  }

}
