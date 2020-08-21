import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input('name') name: string;
  @Input('full_name') fullName: string;
  @Input('fork') isFork: boolean;
  @Input('html_url') htmlUrl: string;
  @Input('stargazers_count') stargazers: number;
  @Input('watchers') watchers: number;
  @Input('forks') forks: number;
  @Input('created_at') createdAt: string;
  @Input('updated_at') updatedAt: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
