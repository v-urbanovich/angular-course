import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-root/app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { ListBlockComponent } from './list-block/list-block.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        SocialComponent,
        ListBlockComponent,
        ListItemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
