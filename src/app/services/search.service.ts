import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private configUrl = "https://api.github.com/users/{user}/repos?page=1&per_page=8";
  
  constructor(private http: HttpClient) { }

  fetch(user : string) {
    return this.http.get(this.configUrl.replace('{user}', user), {observe: 'response'});
  }
}
