import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input('name') name: string;
  @Input('full-name') fullName: string;
  @Input('is-fork') isFork: boolean;
  @Input('html-url') htmlUrl: string;
  @Input('stargazers') stargazers: number;
  @Input('watchers') watchers: number;
  @Input('forks') forks: number;
  @Input('created-at') createdAt: string;
  @Input('updated-at') updatedAt: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
