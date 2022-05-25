import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

import {RegistrationService}  from '../registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user=new User();
  selectedHobby:any=[]
  msg='';
  hobbyArr=[
    {
      "key":"learn a skill",
      "value":"learn a skill"
    }
    ,{
      "key":"Travelling new places",
      "value":"Travelling new places"
    },
    {
      "key":"playing games",
      "value":"playing games"
    },
    {
      "key":"Reading books",
      "value":"Reading books"
    }
  ]
  alert?: boolean;
  constructor(private _service : RegistrationService,private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.user.hobbies =this.selectedHobby.toString();
    console.log(this.user.hobbies);
   this._service.registerUserFromRemote(this.user).subscribe(
     data=>{
       console.log("response received");
       this.alert=true;
       
      },
      error=>{
        console.log("Exception ocuur");
        this.msg="User with this username already exists";

      }
      
      
   )
  }

  hobbyChange(event: any){
    let index=this.selectedHobby.indexOf(event.target.value);
    if(index == -1){
    this.selectedHobby.push(event.target.value);
    console.log(this.selectedHobby)
    }else{
    this.selectedHobby.splice(index,1);    
  }
}
closeAlert(){
  this.alert=false;
}

}

