import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const SET_USERNAME = '[User] Define user';
export const REDIRECT = '[User] Redirect home';

export const setUserName = createAction(SET_USERNAME, props<{ name: string }>());
export const redirect = createAction(REDIRECT);