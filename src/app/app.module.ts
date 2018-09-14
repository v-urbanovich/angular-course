import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

import { FirstHomeworkModule } from './first-homework/first-homework.module';
import { SecondHomeworkModule } from './second-homework/second-homework.module';
import { ThirdHomeworkModule } from './third-homework/third-homework.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SecondHomeworkModule,
        FirstHomeworkModule,
        ThirdHomeworkModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}