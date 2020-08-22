import { Injectable } from '@angular/core';
import { Page, PageType } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  
  getPaginationType(type: string) : PageType {
    switch(type) {
      case 'next':
        return PageType.NEXT;
      case 'last':
        return PageType.LAST;
      case 'first':
        return PageType.FIRST;
      case 'prev':
        return PageType.PREV;
      default:
        return;
    }
  }

}
