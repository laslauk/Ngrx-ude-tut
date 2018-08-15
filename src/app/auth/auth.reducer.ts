import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

// AuthActions tyyppi voi olla vain jokin authActioneista niin helpompi kirjoittaa reducer
export function authReducer(state: AuthState = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {


    case AuthActionTypes.LoginAction:
    return {
      loggedIn: true,
      user: action.payload.user
    };


    case AuthActionTypes.LogoutAction:
    return {
      loggedIn: false,
      user: undefined
    };

    default:
      return state;
  }
}
