import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TotalRecountComponent } from './components/total-recount/total-recount.component';
import { NewOperationComponent } from './components/new-operation/new-operation.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalRecountComponent,
    NewOperationComponent,
    IncomeComponent,
    ExpensesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
