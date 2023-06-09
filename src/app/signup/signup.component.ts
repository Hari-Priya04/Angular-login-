import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    userName:'',
    password:'',
    name:'',
    emailId:'',
    mobileNumber:''
  }
  reactiveForm!:FormGroup;
  submitted:boolean=false;
  constructor(private loginservice:LoginService,private router:Router,private formBuilder: FormBuilder) { }
  get f(){
    return this.reactiveForm.controls;
  }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      userName:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      emailId:new FormControl('',[Validators.required]),
      mobileNumber:new FormControl('',[Validators.required])
      })
  }
  onSubmit(){
    this.submitted=true;
    if(this.reactiveForm.invalid){
      return;
    }
   this.user=this.reactiveForm.value
  {this.loginservice.signup(this.user).subscribe(
    (data:any)=>{
      this.router.navigateByUrl('/')
      alert("User registered successfully");
    })
    }}}



