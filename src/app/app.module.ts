import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-root/app.component';
import { WeatherComponent } from './app-root/weather/weather.component';
import { SocialComponent } from './app-root/social/social.component';
import { ListBlockComponent } from './app-root/list-block/list-block.component';
import { ListItemComponent } from './app-root/list-block/list-item/list-item.component';
import { ResortDataService } from './app-root/services/resort-data.service';
import { ResortsFilterPipe } from './app-root/list-block/pipes/resorts-filter.pipe';
import { PhoneFormatPipe } from './common/pipes/phone-format.pipe';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        SocialComponent,
        ListBlockComponent,
        ListItemComponent,
        ResortsFilterPipe,
        PhoneFormatPipe
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