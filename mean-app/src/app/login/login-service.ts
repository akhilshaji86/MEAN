import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginInterface} from "./login-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {FakeBackend} from "../fake-backend";

@Injectable({
  providedIn: "root",
  deps:[FakeBackend]
})
export class LoginService {
  constructor(private http: HttpClient, private route: Router) {
  }

  login(loginForm: LoginInterface) {
    console.log(">>", loginForm);
    this.http.post('http://localhost:4100/auth ', (loginForm)).subscribe(res=>{
      console.log("response",res);
    });
  }
}
