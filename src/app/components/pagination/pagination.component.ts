import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input('has-next') hasNext: number;
  @Input('has-prev') hasPrev: number;
  @Input() page: number;
  @Input('last-page') lastPage: number;

  constructor() { }

  ngOnInit(): void {

  }

}
