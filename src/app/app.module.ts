import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-root/app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { ListBlockComponent } from './list-block/list-block.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ResortDataService } from './services/resort-data.service';
import { ResortsSorterPipe } from './pipes/resorts-sorter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        SocialComponent,
        ListBlockComponent,
        ListItemComponent,
        ResortsSorterPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        ResortDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}