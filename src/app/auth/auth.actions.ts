import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

// Tässä filussa on kaikki actionit mitä Auth moduulissa on

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: {user: User}) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;

  constructor() {}

}

export type AuthActions = Login | Logout;
