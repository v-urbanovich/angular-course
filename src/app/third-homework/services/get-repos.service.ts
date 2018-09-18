import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GITHUB_URL } from '../constants';

@Injectable()
export class GetReposService {

    public lastRequestError: string | null;

    public constructor(
        private http: HttpClient,
        @Inject(GITHUB_URL) private url: string
    ) { }

    public getRepos(query: string): Observable<IGitHubRepo[]> | any {
        this.lastRequestError = null;
        if (!query) { return of([]); }

        return this.http.get<IGitHubRepo[]>(`${this.url}${query}`)
            .pipe(
                map((data: { items: IGitHubRepo[] }) => data.items),
                // catchError((error: any) => {
                //     this.lastRequestError = error.message;
                //     return of([]);
                // })
            );
    }
}
