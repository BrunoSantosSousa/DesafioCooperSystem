import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParseLinkService {

  constructor() { }

  parseLinkHeader(header: string) {
    if (header.length === 0) return;
    const rels = header.split(',');
    var links = {};
    for(let rel of rels) {
      var relSplit = rel.split(';');
      if (relSplit.length !== 2) continue;
      const url = relSplit[0].replace(/<(.*)>/, '$1').trim();
      const name = relSplit[1].replace(/rel="(.*)"/, '$1').trim();
      const urlSplit = url.split('?');
      const params = urlSplit[1].split("&");
      let paramKeyValue = {};
      for(let param of params) {
        const paramsSplit = param.split("=");
        paramKeyValue[paramsSplit[0]] = paramsSplit[1];
      }
      links[name] = {
        ...paramKeyValue,
        "url" : url,
      };
    }
    return links;
  }
}
