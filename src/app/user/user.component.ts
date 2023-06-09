import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  title = 'angularpractice';
  
  
  user={
    userName:'',
    password:'',
    name:'',
    emailId:'',
    mobileNumber:''
  }
  users:any;
  orderHeader:any;
  isDescOrder:boolean=true;
  searchText:any={userName:''};
  showDialog: any;
  id=null;
  submitted:boolean=false;
  reactiveForm!:FormGroup;
  
  


  constructor(private UserService: UserService,private loginservice: LoginService,private router:Router,private formBuilder:FormBuilder) {
  }
  get f(){
    return this.reactiveForm.controls;
  }

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      userName:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      emailId:new FormControl('',[Validators.required]),
      mobileNumber:new FormControl('',[Validators.required])
      })
     this.getusers();
}

getusers(){
  this.UserService.getAllUser().subscribe((res=>{
    this.users=res;
  }))
}


sort(headerName:String){
  this.isDescOrder= !this.isDescOrder;
  this.orderHeader=headerName;}

  
adduser(){

  this.submitted=true;
    if(this.reactiveForm.invalid){
      return;
    }
    this.user=this.reactiveForm.value
    this.loginservice.addUser(this.user).subscribe(
      (data:any)=>{
       this.showDialog=!this.showDialog
         alert("User added successfully");
          this.getusers()    
          this.reactiveForm.reset();
          this.submitted=false;
      })}
  
  delete(id:any){
    if(confirm("do you want to delete an item")){
    this.loginservice.deleteUser(id).subscribe((res)=>{
      this.getusers();
    })
  }

  }
}




