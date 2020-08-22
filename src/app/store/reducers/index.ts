import { 
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer
} from '@ngrx/store';

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