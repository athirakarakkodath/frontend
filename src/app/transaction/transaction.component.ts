import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


//to hold current acno and transaction
  acno:any;
  transaction:any;


  constructor(private ds:DataService) { 
    this.acno = this.ds.currentAcno;
    this.transaction = this.ds.gettransaction(this.acno);
 console.log(this.transaction);
 

  }

  ngOnInit(): void {
  }

}
