import { Action, createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions';
import { Repository } from '../../models/repository.model';
import { Pagination } from '../../models/pagination.model';
import { Error } from '../../models/error.model';

export interface SearchState {
    repositories: Repository[];
    paginations: Pagination[];
    error: Error,
    hasError: boolean
}

export const initialState : SearchState = {
    repositories: [],
    paginations: [],
    error: {
        statusCode: 0,
        message: ''
    },
    hasError: false
}

const searchReducer = createReducer(
    initialState,
    on(SearchActions.loadRepositories, (() => initialState)),
    on(SearchActions.setRepositories, (state, { repositories }) => ({...state, repositories})),
    on(SearchActions.setPaginations, (state, { paginations }) => ({ ...state, paginations })),
    on(SearchActions.setError, (state, { error }) => ({...state, hasError: true, error: error}))
)

export function reducer(state: SearchState, action: Action) {
    return searchReducer(state, action);
}