import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { 
    tap,
    map, 
    filter, 
    catchError, 
    exhaustMap, 
    switchMap, 
    withLatestFrom } from 'rxjs/operators';
import { SearchService } from '../services/search.service'
import { ParseLinkService } from '../services/parse-link.service';
import { UserActions, SearchActions } from '../store'
import { Repository } from '../models/repository.model';
import { Page } from '../models/page.model';
import { PaginationService } from '../services/pagination.service';


@Injectable()
export class SearchEffects {

    @Effect()
    searchRepositories$ = this.actions$.pipe(
        ofType(SearchActions.LOAD_REPOSITORIES),
        map((action : any) => action.name),
        filter((name: string) => name.length !== 0),
        exhaustMap((name: string) => {
            return this.searchService.fetch(name).pipe(
                switchMap((data: any) => this.searchService.handleSuccess(data)),
                catchError(err => this.searchService.handleError(err))
            )
        })
    );

    @Effect()
    loadNextPage$ = this.actions$.pipe(
        ofType(SearchActions.loadNextPage),
        withLatestFrom(this.store.pipe(select(fromStore.getPages))),
        map(([action, pages]) => this.paginationService.getNextPageUrl(pages)),
        map((url) => SearchActions.loadRepositoriesByUrl({url}))
    );

    @Effect()
    loadPrevPage$ = this.actions$.pipe(
        ofType(SearchActions.loadPrevPage),
        withLatestFrom(this.store.pipe(select(fromStore.getPages))),
        map(([action, pages]) => this.paginationService.getPrevPageUrl(pages)),
        map((url) => SearchActions.loadRepositoriesByUrl({url}))
    );

    @Effect()
    loadRepositoriesByUrl$ = this.actions$.pipe(
        ofType(SearchActions.loadRepositoriesByUrl),
        map((action : any) => action.url),
        exhaustMap((url : string) => {
            return this.searchService.fetchByUrl(url).pipe(
                switchMap((data : any) => this.searchService.handleSuccess(data)),
                catchError(err => this.searchService.handleError(err))
            )
        })
    );

    @Effect()
    generatePagination$ = this.actions$.pipe(
        ofType(SearchActions.SET_PAGES),
        map((action : any) => action.pages),
        withLatestFrom(this.store.pipe(select(fromStore.getCurrentPage))),
        map(([pages, currentPage]) => {
            const pagination = this.paginationService.generatePagination(pages, currentPage);
            return SearchActions.setPagination({pagination})
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
        private store : Store<fromStore.State>,
        private searchService : SearchService,
        private paginationService : PaginationService,
        private parseLinkService : ParseLinkService
    ) {}

}