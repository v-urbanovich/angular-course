import { Component, Input } from '@angular/core';

@Component({
    selector: 'uu-app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

    @Input()
    public weather: IWeather;

}
