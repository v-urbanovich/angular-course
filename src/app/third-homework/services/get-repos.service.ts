import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GetReposService {

  public constructor(private http: HttpClient) { }

  public getRepos(): Observable<IGitHubRepo[]> {
    return this.http.get<IGitHubRepo[]>('https://api.github.com/search/repositories?q=a')
        .pipe(
            map((data: {items: IGitHubRepo[]}) => {
              return data.items;
            })
        );
  }
}
