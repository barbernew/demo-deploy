import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()

export class WorksheetAccessGuard implements CanActivate {

  constructor(private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // if (route.routeConfig.path == 'admin-page') {
    //   console.log('lol');
    //   this.router.navigate(["admin-page"]);
    //   return false;
    // }
    // if (!sessionStorage.getItem('token')) {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(["greeting-page"]);
      sessionStorage.setItem('login', 'open');
      return false;
    }
    return true;
  }
}
