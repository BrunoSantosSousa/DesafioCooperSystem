import { createAction, props } from '@ngrx/store';
import { Repository } from '../../models/repository.model';
import { Page } from '../../models/page.model';
import { Error } from '../../models/error.model';

export const LOAD_REPOSITORIES = '[Search] Load repositories';
export const SET_REPOSITORIES = '[Search] Define repositories';
export const SET_PAGES = '[Search] Define paginations';
export const SET_ERROR = '[Search] Defina error';

export const loadRepositories = createAction(LOAD_REPOSITORIES, props<{ name: string }>());
export const setRepositories = createAction(SET_REPOSITORIES, props<{ repositories: Repository[] }>());
export const setPages = createAction(SET_PAGES, props<{ pages: Page[] }>());
export const setError = createAction(SET_ERROR, props<{ error: Error}>());