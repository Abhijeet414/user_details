import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
     
     msg: string = "";
     myform: FormGroup;
  constructor() { 
    this.myform = new FormGroup({   
 username: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[A-Za-z0-9]*$")]),
 password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern("^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})*$")])
    });
  }

  onRegisterClick() {
 if (this.myform.valid) {
 this.msg = "USERNAME:" + this.myform.controls.username.value +"<br>PASSWORD:" + this.myform.controls.password.value;
 }
else {
 return this.msg = "Invalid";
 
 }
  }
  ngOnInit(): void {
  }

}
