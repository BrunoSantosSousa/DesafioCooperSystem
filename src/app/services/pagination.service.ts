import { Injectable } from '@angular/core';
import { Page, PageType } from '../models/page.model';
import { Pagination } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  
  getPageType(type: string) : PageType {
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

  generatePagination(pages : Page[], currentPage: number) : Pagination {
    let hasNext = false;
    let hasPrev = false;
    let lastPage = 1;
    let page = currentPage;
    for(let localPage of pages) {
      if(localPage.type === PageType.NEXT) {
        hasNext = true;
      } else if (localPage.type === PageType.PREV) {
        hasPrev = true;
      } else if (localPage.type === PageType.LAST) {
        lastPage = localPage.page;
      }
    }
    lastPage = currentPage > lastPage ? currentPage : lastPage;
    return { hasNext, hasPrev, lastPage, page }
  }

  getNextPageUrl(pages: Page[]) : string {
    for(let page of pages) {
      if(page.type === PageType.NEXT) {
        return page.url;
      }
    }
  }

  getPrevPageUrl(pages: Page[]) : string {
    for(let page of pages) {
      if(page.type === PageType.PREV) {
        return page.url;
      }
    }
  }

}
