import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public user$ = this.store.pipe(select(fromStore.getUser))
  public repositories$ = this.store.pipe(select(fromStore.getRepositories))

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {
    
  }

  onRedirectHome() {
    this.store.dispatch(fromStore.UserActions.redirect());
  }

}
