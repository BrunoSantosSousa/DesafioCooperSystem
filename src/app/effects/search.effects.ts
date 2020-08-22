import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { SearchService } from '../services/search.service'
import { ParseLinkService } from '../services/parse-link.service';
import { UserActions, SearchActions } from '../store'
import { Repository } from '../models/repository.model';

@Injectable()
export class SearchEffects {

    @Effect()
    searchRepositories = this.actions$.pipe(
        ofType(UserActions.setUserName.type),
        map((action: any) => action.name),
        exhaustMap((name: string) => this.searchService.fetch(name).pipe(
            map((data: any) => {
                console.log(data);
                console.log(data.headers.get('Link'));
                const links = this.parseLinkService.parseLinkHeader(data.headers.get('Link'));
                console.log(links);
                return data.body;
            }),
            map((repositories : Repository[]) => SearchActions.setRepositories({repositories}))
        ))
    );

    constructor(
        private actions$ : Actions,
        private searchService : SearchService,
        private parseLinkService : ParseLinkService
    ) {}
}