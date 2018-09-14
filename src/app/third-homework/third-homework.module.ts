import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdHomeworkComponent } from './third-homework.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GetReposService } from './services/get-repos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GITHUB_URL } from './constants';
import { ReposTableComponent } from './repos-table/repos-table.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule, MatInputModule,
        MatTableModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ThirdHomeworkComponent, ReposTableComponent],
    providers: [
        GetReposService,
        {provide: GITHUB_URL, useValue: 'https://api.github.com/search/repositories?q='},
    ]
})
export class ThirdHomeworkModule {
}
