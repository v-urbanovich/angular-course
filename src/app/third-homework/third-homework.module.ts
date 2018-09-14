import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdHomeworkComponent } from './third-homework.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GetReposService } from './services/get-repos.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule, MatInputModule,
        MatTableModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ThirdHomeworkComponent],
    providers: [GetReposService]
})
export class ThirdHomeworkModule {
}
