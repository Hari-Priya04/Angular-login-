import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm!:FormGroup;
  submitted:boolean=false;
  user={
    userName:'',
    password:''
  }

  constructor(private loginservice:LoginService,private router:Router, private formBuilder: FormBuilder) { }
  get f(){
    return this.reactiveForm.controls;
  }
  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.reactiveForm.invalid){
      return;
    }
    
  this.user=this.reactiveForm.value
  this.loginservice.login(this.user).subscribe(
      (data:any)=>{
      this.router.navigateByUrl('/user')
      })
      }}
  

