import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginInterface} from "./login-interface";
import {Router} from "@angular/router";
import {FakeBackend} from "../fake-backend";

@Injectable({
  providedIn: "root",
  deps: [FakeBackend]
})
export class LoginService {
  constructor(private http: HttpClient, private route: Router) {
  }

  login(credentials: LoginInterface): boolean {
    console.log(">>", credentials);
    this.http.post<LoginInterface>('http://localhost:4100/auth ', (credentials)).subscribe(res => {
      console.log("response", res);
    });
    return true
  }
}
