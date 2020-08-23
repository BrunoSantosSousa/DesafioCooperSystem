import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  
  public user$ = this.store.pipe(select(fromStore.getUser));
  public repositories$ = this.store.pipe(select(fromStore.getRepositories));
  public pagination$ = this.store.pipe(select(fromStore.getPagination));
  public error$ = this.store.pipe(select(fromStore.getError));

  private subscription: Subscription = new Subscription();

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.user$.subscribe((user) => {
      this.store.dispatch(fromStore.SearchActions.loadRepositories({
        name: user.name
      }));
    }))
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }

  onRedirectHome() {
    this.subscription.unsubscribe();
    this.store.dispatch(fromStore.UserActions.redirect());
  }

  loadNextPage() {
    this.store.dispatch(fromStore.SearchActions.loadNextPage());
  }

  loadPrevPage() {
    this.store.dispatch(fromStore.SearchActions.loadPrevPage());
  }
}
