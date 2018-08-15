import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { AppState } from './reducers';
import { Logout } from './auth/auth.actions';
import { map } from 'rxjs/operators';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(private store: Store<AppState>, private router: Router) {

    }

    ngOnInit() {

      // storeen kun subscribetnää se antaa intsansseja appStatesta mikä pitää sisällään alaStateja
      // store publishaa kun on uus state, ei samaa vanhaa kokoajan
   //   this.store.subscribe(state => console.log("state", state) );

      //jos laitetaan pipe, niin subscribeltä tuleva data menee ensin, eli se saa staten, sitten subscriben sisällä
      // oleva state on vain auth state,  pipelle menee koko state objecti joka saadaan subscribeltä


        //map palauttaa pipelle obserablen, joka ottaa store obserablen antaman state instanssin ja antaa tästä ulos muunnettuna state.auth.LoggedIn arvon pipelle
        // Pipe antaa siis semmoissen observablen subscribelle, joka emitoi mapin sisältämän funktion arvoja. subscriben pätee siis pipen antamaan observableen



      this.isLoggedIn$ = this.store.pipe(
          map(state => state.auth.loggedIn)
      );

      //observable joka emitoi valuen statesta loggedIn valueita
      this.isLoggedOut$ = this.isLoggedIn$.pipe( map ( val => !val));

        /*
      console.log("onko kirjautunut ulos sisään");
      this.isLoggedOut$.subscribe(val => console.log(val));
      */

      /*
        this.store.pipe(
          map(state => state.auth.loggedIn)
        ).subscribe(loggedIn => console.log("logged in value", loggedIn) );
      */
/*
        this.isLoggedIn$ = this.store.pipe(

          select(isLoggedIn)
           //applyy isLoggedIn mapping functiona, poistaa duplikatet
          // eli jos select filteröi actioneja, ei emitoida duplikate valueita
          // isLoggedIn emitoi valueita vain kun value muuttuu edellisestä

        );

        this.isLoggedOut$ = this.store.pipe(

          select(isLoggedOut)

        );
        */


    }

    logout() {

      this.store.dispatch(new Logout());

      this.router.navigateByUrl('/login');

    }


}
