import { 
  Component, 
  OnInit, 
  Input,
  Output,
  EventEmitter } from '@angular/core';

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

  @Output() onNext = new EventEmitter<any>();
  @Output() onPrev = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {

  }

  emitOnNext() {
    this.onNext.emit();
  }

  emitOnPrev() {
    this.onPrev.emit();
  }

}
