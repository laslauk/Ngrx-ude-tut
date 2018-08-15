import { createSelector } from "@ngrx/store";

//feature selector, valitsee statesta vain jonkun osan
// eli tallennetaan selectAuthStateen funktio joka joka
export const selectAuthState = state => state.auth;

//memoized function
// isLogged in funktio ottaa complete store staten ja antaa ulos booleanin jos user on logged in tai ei
export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn

//projector function, ottaa all the outputs of all the selectors functions defined here
);


export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !isLoggedIn
);
