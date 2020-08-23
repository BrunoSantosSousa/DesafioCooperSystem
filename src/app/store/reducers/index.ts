import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from './user.reducer'
import * as fromSearch from './search.reducer'

export interface State {
    user: fromUser.UserState,
    search: fromSearch.SearchState
}

export const reducers: ActionReducerMap<State> = {
    user : fromUser.reducer,
    search : fromSearch.reducer
}

export const getUser = (state : State) => state.user;
export const getRepositories = (state : State) => state.search.repositories;
export const getPagination = (state : State) => state.search.pagination;
export const getPages = (state : State) => state.search.pages;
export const getCurrentPage = (state : State) => state.search.currentPage;
export const getError = (state : State) => state.search.error;