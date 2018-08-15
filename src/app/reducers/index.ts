import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer, AuthState } from '../auth/auth.reducer';




// Defines data type of the store
export interface AppState {
  auth: AuthState;
}

// Kaikki reduerit kutsutaan kun app käynnistetään
export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
