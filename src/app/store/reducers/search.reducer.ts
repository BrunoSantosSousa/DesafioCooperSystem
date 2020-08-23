import { Action, createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions';
import { Repository } from '../../models/repository.model';
import { Page } from '../../models/page.model';
import { Error } from '../../models/error.model';
import { Pagination } from '../../models/pagination.model';

export interface SearchState {
    repositories: Repository[];
    pages: Page[];
    error: Error,
    hasError: boolean,
    pagination: Pagination,
    currentPage: number
}

export const initialState : SearchState = {
    repositories: [],
    pages: [],
    error: {
        message: ''
    },
    hasError: false,
    pagination: {
        hasNext: false,
        hasPrev: false,
        page: 1,
        lastPage: 1
    },
    currentPage: 1
}

const searchReducer = createReducer(
    initialState,
    on(SearchActions.loadRepositories, (() => initialState)),
    on(SearchActions.setRepositories, (state, { repositories }) => ({...state, repositories})),
    on(SearchActions.setPages, (state, { pages }) => ({ ...state, pages })),
    on(SearchActions.setError, (state, { error }) => ({...state, hasError: true, error: error})),
    on(SearchActions.setPagination, (state, { pagination }) => ({...state, pagination})),
    on(SearchActions.loadNextPage, (state) => ({...state, currentPage: state.currentPage + 1})),
    on(SearchActions.loadPrevPage, (state) => ({...state, currentPage: state.currentPage - 1})),
    on(SearchActions.loadRepositoriesByUrl, (state) => ({...initialState, currentPage: state.currentPage}))
)

export function reducer(state: SearchState, action: Action) {
    return searchReducer(state, action);
}
