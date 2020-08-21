import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';

import { UserActions } from '../store'

@Injectable()
export class SearchEffects {

    @Effect({dispatch: false})
    searchRepositories = this.actions$.pipe(
        ofType(UserActions.setUserName.type),
        map((action: any)  => console.log(action.name))
    );

    constructor(private actions$ : Actions) {}
}