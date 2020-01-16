import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {LoginInterface} from "./login/login-interface";
@Injectable()
export class FakeBackend implements HttpInterceptor{
  intercept(req: HttpRequest<LoginInterface>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url,method,headers,body}=req;

    return of(new HttpResponse({status:200,body}))

  }

}
