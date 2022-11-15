import { Component } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent {

  constructor() { }

  weather!: Weather;

  loadWeather(weather: Weather) : void {
    this.weather = weather;
  }

}
