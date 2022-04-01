import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public nameFieldInputType:string;
public nameFieldInputId:string;
public nameFieldInputPlaceHolder:string;
public nameFieldInputTitle:string;
public emailFieldInputType:string;
public emailFieldInputId:string;
public emailFieldInputPlaceHolder:string;
public emailFieldInputTitle:string;
public mobFieldInputType:string;
public mobFieldInputId:string;
public mobFieldInputPlaceHolder:string;
public mobFieldInputTitle:string;
public passwordFieldInputType:string;
public passwordFieldInputId:string;
public passwordFieldInputPlaceHolder:string;
public passwordFieldInputTitle:string;
  constructor() { }

  ngOnInit(): void {
  this.nameFieldInputType="text";
  this.nameFieldInputId="name";
  this.nameFieldInputPlaceHolder="Enter Your Name";
  this.nameFieldInputTitle="Name";
  this.emailFieldInputType="email";
  this.emailFieldInputId="email";
  this.emailFieldInputPlaceHolder="Enter Your Email";
  this.emailFieldInputTitle="Email";
  this.mobFieldInputType="mob";
  this.mobFieldInputId="mob";
  this.mobFieldInputPlaceHolder="Enter Your Mobile Number";
  this.mobFieldInputTitle="Mobile Number";
  this.passwordFieldInputType="password";
  this.passwordFieldInputId="password";
  this.passwordFieldInputPlaceHolder="Enter Your password";
  this.passwordFieldInputTitle="Password";
  }

}
