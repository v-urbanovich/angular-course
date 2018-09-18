import { Component, Input } from '@angular/core';

@Component({
    selector: 'uu-app-repos-table',
    templateUrl: './repos-table.component.html',
    styleUrls: ['./repos-table.component.scss']
})
export class ReposTableComponent {

    @Input('repositories')
    public dataSource: IGitHubRepo[];
    public displayedColumns: string[] = ['ownerName', 'name', 'language', 'score'];

}
