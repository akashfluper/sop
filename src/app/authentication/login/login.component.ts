import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted : boolean = false;
  
  loginForm= new FormGroup({
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  constructor(

    private toster:ToastrService,
    private api :ApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('currentUser');

  }
  get f() {
    
    return this.loginForm.controls;
   
  }

  onSubmitForm(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    
    let data = this.loginForm.value
    this.api.postForAdmin('login',data).subscribe((res:any)=>{
      console.log(res);
      this.toster.success(res.message);
      this.router.navigateByUrl('/home/dashboard')

      localStorage.setItem('currentUser',JSON.stringify(res.response));

      
    },err=>{
      this.toster.error(err.error.message)
    })

  }

}
