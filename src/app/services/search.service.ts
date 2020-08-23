import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { SearchActions } from '../store/actions';
import { Page } from '../models/page.model';
import { Repository } from '../models/repository.model';
import { ParseLinkService } from './parse-link.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private configUrl = "https://api.github.com/users/{user}/repos?page=1&per_page=8";
  
  constructor(
    private http: HttpClient,
    private parseLinkService: ParseLinkService) { }

  fetch(user : string) {
    return this.http.get(this.configUrl.replace('{user}', user), {observe: 'response'});
  }

  fetchByUrl(url: string) {
    return this.http.get(url, { observe: 'response' })
  }

  handleSuccess(data) {
    if(data.body.length === 0) {
        const error = { message: 'Nenhum repositório encontrado!' };
        return [SearchActions.setError({error})]
    }
    const pages : Page[] = this.parseLinkService.parseLinkHeader(data.headers.get('Link'));
    const repositories : Repository[] = data.body;
    return [
        SearchActions.setPages({pages}),
        SearchActions.setRepositories({repositories})
    ];
  }

  handleError(err) {
    let message = '';
    if(err.status === 404) {
        message = 'Usuário não encontrado no GitHub!';
    } else {
        message = 'Falha ao buscar repositórios'
    }
    const error = { message }
    return of(SearchActions.setError({error}))
  }
}
