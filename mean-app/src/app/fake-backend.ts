import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export class FakeBackend implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url,method,headers,body}=req;

    return of(new HttpResponse({status:200,body}))

  }

}
