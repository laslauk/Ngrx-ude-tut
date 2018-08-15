import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers";
import { map, tap } from "rxjs/operators";
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.store.pipe(
      map(state => state.auth.loggedIn),
      tap(loggedIn => {
        console.log(loggedIn);
        if (!loggedIn) {
          this.router.navigateByUrl('/login');
        }

      })
    );



   }
}

