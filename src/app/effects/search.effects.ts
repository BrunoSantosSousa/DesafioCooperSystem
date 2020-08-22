import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, filter, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { SearchService } from '../services/search.service'
import { ParseLinkService } from '../services/parse-link.service';
import { UserActions, SearchActions } from '../store'
import { Repository } from '../models/repository.model';
import { Page } from '../models/page.model';


@Injectable()
export class SearchEffects {

    @Effect()
    searchRepositories$ = this.actions$.pipe(
        ofType(SearchActions.LOAD_REPOSITORIES),
        map((action : any) => action.name),
        filter((name: string) => name.length !== 0),
        exhaustMap((name: string) => {
            return this.searchService.fetch(name).pipe(
                switchMap((data: any) => {
                    const pages : Page[] = this.parseLinkService.parseLinkHeader(data.headers.get('Link'));
                    const repositories : Repository[] = data.body;
                    return [
                        SearchActions.setPages({pages}),
                        SearchActions.setRepositories({repositories})
                    ];
                }),
                catchError(err => {
                    console.log(err)
                    return of()
                })
            )
        })
    );

    @Effect()
    redirectToHome$ = this.actions$.pipe(
        ofType(SearchActions.LOAD_REPOSITORIES),
        filter((action : any) => action.name.length === 0),
        map(() => UserActions.redirect())        
    )

    constructor(
        private actions$ : Actions,
        private searchService : SearchService,
        private parseLinkService : ParseLinkService
    ) {}
}