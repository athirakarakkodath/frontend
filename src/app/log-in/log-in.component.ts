import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit { //3rd executed
  //properties
  aim = "your perfect banking partner!!!!"
  accno = "Account Number please"

  acno = "";
  pswd = ""
  //user defind functions   4th executed

  userDetails: any = { //objects of objects
    1000: { acno: 1000, username: "Jees", password: 1000, balance: 1000 },
    1001: { acno: 1000, username: "Amal", password: 1001, balance: 1000 },
    1002: { acno: 1000, username: "Sarath", password: 1002, balance: 1000 }

  }
  //router-variable of login,router-class of navigate by url
  constructor(private router: Router, private ds: DataService) { } // 1st executed,special memeber function,automatically invoks when an object created

  ngOnInit(): void { // 2nd execution life cycle hooks of angular ,initial process of component initialization

  }


  get_acno(event: any) {
    this.acno = event.target.value;
    console.log(this.acno);

  }
  get_psw(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);

  }



  logIn() {
    // alert("button clicked")
    var acno = this.acno;
    var pswd = this.pswd;
    const result = this.ds.login(acno, pswd)


    if (result) {
      alert("login successfull");
      this.router.navigateByUrl('dashboard')
    }

  





    // if (acno in userDetails) {
    //   if (pswd == userDetails[acno]['password']) {
    //     alert("successfull login")
    //     this.router.navigateByUrl('dashboard')
    //     console.log(acno);

    //   }
    //   else {
    //     alert("Incorrect password")
    //   }
    // }

    // else {
    //   alert("Invalid Account Number")
    // }

  }

  //logIn(a: any, p: any){
  // alert("button clicked")
  //  var acno = a.value;
  //  var pswd = p.value;
  //  var userDetails = this.userDetails;



  //  if (acno in userDetails){
  //   if (pswd == userDetails[acno]['password']){
  //     alert("successfull login")
  //   }
  //   else{
  //     alert ("incorrect password")
  //   }
  //  }

  // else{
  //   alert("Invalid Account Number")
  // }

//}



}
