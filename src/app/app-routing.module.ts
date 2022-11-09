import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [//array
  {//login-4200
    path:'',component:LogInComponent
  },
  {//dashboard-4200/dashboard
    path:'dashboard',component:DashboardComponent
  },
  {//register
    path:'register',component:RegisterComponent 
  },
  {//register
    path:'transaction',component:TransactionComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
