import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { ConfirmedValidator } from 'src/app/validators/passwordValidators';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword!:FormGroup;
  submitted= false;



  constructor(
    private api:ApiService,
    private router:Router,
    private toster:ToastrService,
    private fb:FormBuilder
  ) { }
  
  ngOnInit(): void {
   this.resetPassword=this.fb.group({
    newPassword:['',Validators.required],
    confirmPassword : ['',Validators.required],

   },{
     validator:ConfirmedValidator('newPassword', 'confirmPassword')
   })
  }
  get f() {
    
    return this.resetPassword.controls;
   
  }
  passwordSubmit(){
    this.submitted=true;
    if(this.resetPassword.invalid){
      return
    }
    let a = this.resetPassword.value;
    let data= this.resetPassword.value
    this.api.postForAdmin('resetPassword',data).subscribe((res:any)=>{
      console.log(res);
      
      
    })
  }

}
