import { Component } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent {

  constructor() { }

  weather!: string;
  city!: string;

  loadWeather(weather: Weather) : void {
    this.weather = JSON.stringify(weather);
  }

  loadCity(city: string) : void {
    this.city = city;
  }

}
