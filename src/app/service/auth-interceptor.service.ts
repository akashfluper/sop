import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { catchError } from "rxjs/operators";
import { Routes, Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // debugger
    let adminData = localStorage.getItem("currentUser");
    var token;
    if (adminData && adminData != "undefined") {
      token = JSON.parse(adminData).accessToken;
    } else {
      token = "";
    }
    let url = "";

    url = req.url;

    const copiedReq = req.clone({
      headers: req.headers.append("accessToken", token),
      url: url,
    });

    return next.handle(copiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error && error.error.message == "Invalid access token.") {
          localStorage.removeItem("currentUser");
          this.router.navigate(["/login"]);
        }
        return throwError(error);
      })
    );
  }
}
