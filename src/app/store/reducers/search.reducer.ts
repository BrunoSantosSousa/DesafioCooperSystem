import { Action, createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions';
import { Repository } from '../../models/repository.model';


export interface SearchState {
    repositories: Repository[];
}

export const initialState : SearchState = {
    repositories: []
}

const searchReducer = createReducer(
    initialState,
    on(SearchActions.setRepositories, (state, { repositories }) => ({...state, repositories}))
)

export function reducer(state: SearchState, action: Action) {
    return searchReducer(state, action);
}