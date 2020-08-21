import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store/'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName = '';

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {

  }

  onSubmit(userName: string) {
    this.store.dispatch(fromStore.UserActions.setUserName({
      name: this.userName
    }))
  }

}
