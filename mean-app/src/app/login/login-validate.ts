import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginInterface} from "./login-interface";
import {LoginService} from "./login-service";

@Injectable()

export class LoginValidate implements CanDeactivate<LoginComponent> {
  constructor(private loginService: LoginService) {

  }

  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    return this.authenticate(component.loginForm.form.value);

  }

  authenticate(credentials: LoginInterface): boolean {
    return this.loginService.login(credentials);

  }
}
