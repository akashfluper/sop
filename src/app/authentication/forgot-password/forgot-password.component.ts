import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPassword !: FormGroup
  currentUser: any;
  submitted:boolean=false


  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private router:Router,
    private toster:ToastrService
  ) { }

  ngOnInit(): void {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.forgetPassword=this.fb.group({
      email : ['',Validators.required],
    

    })
    localStorage.clear();
    let value = this.forgetPassword.value;
    
    this.forgetPassword.setValue(value);

  console.log("Hii");
  }
  
 
  passwordSubmit(){
    this.submitted = true;  
    if(this.forgetPassword.invalid){
      this.toster.error('please enter the email')
      return

    }
    let data=this.forgetPassword.value
    this.api.postForAdmin('forgetPassword',data).subscribe((res:any)=>{
      console.log(res);
      this.toster.success(res.message)
      this.router.navigateByUrl('/reset-password')
      localStorage.setItem('currentUser',JSON.stringify(res.response));
      localStorage.removeItem('currentUser');


      
    })
  }


}
