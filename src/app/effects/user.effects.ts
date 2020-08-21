import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';

import { UserActions } from '../store'

@Injectable()
export class UserEffects {

    @Effect({dispatch: false})
    redirectSearch$ = this.actions$.pipe(
        ofType(UserActions.SET_USERNAME),
        tap(() => this.router.navigate(['search']))
    );

    @Effect({dispatch: false})
    redirectHome$ = this.actions$.pipe(
        ofType(UserActions.REDIRECT),
        tap(() => this.router.navigate(['/']))  
    );

    constructor(
        private actions$ : Actions, 
        private router : Router)
    {

    }
}