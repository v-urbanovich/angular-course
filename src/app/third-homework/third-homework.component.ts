import { Component, OnInit } from '@angular/core';
import { GetReposService } from './services/get-repos.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'uu-app-third-homework',
    templateUrl: './third-homework.component.html',
    styleUrls: ['./third-homework.component.scss']
})
export class ThirdHomeworkComponent implements OnInit {

    public searchInput: FormControl = new FormControl();
    public repositories: IGitHubRepo[];

    public constructor(private _gitHubReposService: GetReposService) {}

    public ngOnInit(): void {
        document.body.style.backgroundColor = '#313177';

        this.searchInput.valueChanges
                .pipe(
                    debounceTime(300),
                    distinctUntilChanged(),
                    switchMap((value: string) =>  this._gitHubReposService.getRepos(value)),
                )
            .subscribe((repos: IGitHubRepo[]) => {
                this.repositories = repos;
            }, (error: any) => {
                this._gitHubReposService.lastRequestError = error.message;
                this.repositories = [];
            });
    }

    public getErrorText(): string {
        return this._gitHubReposService.lastRequestError;
    }

    public hideError(): void {
        this._gitHubReposService.lastRequestError = null;
    }

}
