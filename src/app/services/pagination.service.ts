import { Injectable } from '@angular/core';
import { Pagination, PaginationType } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  
  getPaginationType(type: string) : PaginationType {
    switch(type) {
      case 'next':
        return PaginationType.NEXT;
      case 'last':
        return PaginationType.LAST;
      case 'first':
        return PaginationType.FIRST;
      case 'prev':
        return PaginationType.PREV;
      default:
        return;
    }
  }

}
