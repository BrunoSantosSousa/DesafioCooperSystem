import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model'
import { UserActions }  from '../actions';

export interface UserState extends User { }

export const initialState : UserState = {
    name: ''
}

const userReducer = createReducer(
    initialState,
    on(UserActions.setUserName, (state, { name }) => ({...state, name})),
    on(UserActions.redirect, (state) => initialState)
);

export function reducer(state: UserState, action: Action) {
    return userReducer(state, action);
}