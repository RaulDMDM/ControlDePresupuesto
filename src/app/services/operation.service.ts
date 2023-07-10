import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperationInterface } from '../interfaces/operation.interface';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }

  getIncome(){
    return this.http.get('http://localhost:3000/getIncome')
  }

  getExpenses(){
    return this.http.get('http://localhost:3000/getExpenses')
  }

  setIncome(newIncome: OperationInterface){
    return this.http.post('http://localhost:3000/setIncome', newIncome)
  }

  setExpenses(newExpenses: OperationInterface){
    return this.http.post('http://localhost:3000/setExpenses', newExpenses)
  }
}