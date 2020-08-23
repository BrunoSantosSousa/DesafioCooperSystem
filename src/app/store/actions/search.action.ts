import { createAction, props } from '@ngrx/store';
import { Repository } from '../../models/repository.model';
import { Page } from '../../models/page.model';
import { Error } from '../../models/error.model';
import { Pagination } from '../../models/pagination.model';

export const LOAD_REPOSITORIES = '[Search] Load repositories';
export const SET_REPOSITORIES = '[Search] Define repositories';
export const SET_PAGES = '[Search] Define pages';
export const SET_ERROR = '[Search] Defina error';
export const SET_PAGINATION = '[Search] Define pagination';
export const LOAD_NEXT_PAGE = '[Search] Load next page';
export const LOAD_PREV_PAGE = '[Search] Load previous page';
export const LOAD_REPOSITORIES_BY_URL = '[Search] Load repositories by url';

export const loadRepositories = createAction(LOAD_REPOSITORIES, props<{ name: string }>());
export const setRepositories = createAction(SET_REPOSITORIES, props<{ repositories: Repository[] }>());
export const setPages = createAction(SET_PAGES, props<{ pages: Page[] }>());
export const setError = createAction(SET_ERROR, props<{ error: Error}>());
export const setPagination = createAction(SET_PAGINATION, props<{ pagination: Pagination }>());
export const loadNextPage = createAction(LOAD_NEXT_PAGE);
export const loadPrevPage = createAction(LOAD_PREV_PAGE);
export const loadRepositoriesByUrl = createAction(LOAD_REPOSITORIES_BY_URL, props<{ url: string }>());