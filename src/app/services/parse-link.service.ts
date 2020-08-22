import { Injectable } from '@angular/core';
import { Page } from '../models/page.model';
import { PaginationService } from './pagination.service';

@Injectable({
  providedIn: 'root'
})
export class ParseLinkService {

  constructor(private paginationService : PaginationService) { }

  parseLinkHeader(header: string) : Page[] {
    if (header.length === 0) return;

    const rels = header.split(',');
    let links : Page[] = [];

    for(let rel of rels) {
      var relSplit = rel.split(';');
      if (relSplit.length !== 2) continue;
      const url = relSplit[0].replace(/<(.*)>/, '$1').trim();
      const type = relSplit[1].replace(/rel="(.*)"/, '$1').trim();
      const urlSplit = url.split('?');
      const params = urlSplit[1].split("&");
      let paramKeyValue = {};
      for(let param of params) {
        const paramsSplit = param.split("=");
        paramKeyValue[paramsSplit[0]] = paramsSplit[1];
      }
      links.push({
        type: this.paginationService.getPaginationType(type),
        url: url,
        page: paramKeyValue['page'],
        per_page: paramKeyValue['per_page']
      })
    }
    return links;
  }
}
