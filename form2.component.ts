import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
     
     msg: string = "";
     myform: FormGroup;
  constructor() { 
    this.myform = new FormGroup({
 firstname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
 lastname: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
 country: new FormControl("", [Validators.required])
    });
  }

  onRegisterClick() {
 if (this.myform.valid) {
 this.msg = "First Name:" + this.myform.controls.firstname.value +"<br>Last Name:" + this.myform.controls.lastname.value + "<br>Country:" + this.myform.controls.country.value;
 }
else {
 return this.msg = "Invalid";
 
 }
  }
  ngOnInit(): void {
  }

}
