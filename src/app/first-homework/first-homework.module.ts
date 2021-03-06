import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstHomeworkComponent } from './first-homework.component';

import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { ListBlockComponent } from './list-block/list-block.component';
import { ListItemComponent } from './list-block/list-item/list-item.component';
import { ResortDataService } from './list-block/services/resort-data.service';
import { ResortsFilterPipe } from './list-block/pipes/resorts-filter.pipe';
import { PhoneFormatPipe } from './common/pipes/phone-format.pipe';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FirstHomeworkComponent,
        WeatherComponent,
        SocialComponent,
        ListBlockComponent,
        ListItemComponent,
        ResortsFilterPipe,
        PhoneFormatPipe
    ],
    providers: [
        ResortDataService
    ]
})
export class FirstHomeworkModule {
}
