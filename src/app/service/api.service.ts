import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }


  postForAdmin(url:any,data:any){
    return this.http.post(environment.baseUrl + 'admin/'+url,data);
  }
  
}
