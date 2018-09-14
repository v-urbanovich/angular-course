import { Component, OnInit } from '@angular/core';
import { GetReposService } from './services/get-repos.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'uu-app-third-homework',
    templateUrl: './third-homework.component.html',
    styleUrls: ['./third-homework.component.scss']
})
export class ThirdHomeworkComponent implements OnInit {

    public displayedColumns: string[] = ['ownerName', 'name', 'language', 'score'];
    public dataSource: Observable<IGitHubRepo[]>;

    public constructor(private _gitHubReposService: GetReposService) {}

    public ngOnInit(): void {
        document.body.style.backgroundColor = '#313177';
        this.dataSource = this._gitHubReposService.getRepos();
    }

}
