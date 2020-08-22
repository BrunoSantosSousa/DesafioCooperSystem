import { createAction, props } from '@ngrx/store';
import { Repository } from '../../models/repository.model';

export const SET_REPOSITORIES = '[Search] Define repositories';

export const setRepositories = createAction(SET_REPOSITORIES, props<{ repositories: Repository[] }>());