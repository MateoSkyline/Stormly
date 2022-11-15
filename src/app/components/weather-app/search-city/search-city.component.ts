import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { LoadingService } from 'src/app/services/loading.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  constructor(private weatherService: WeatherService, public loader: LoadingService) { }

  city: string = '';

  ngOnInit(): void {
  }

  getWeather() {
    this.loader.show();
    this.weatherService.getWeatherForCity(this.city)
      .subscribe((result: Weather) => {
        console.log(result);
        this.city = '';
        this.loader.hide();
      });
  }

}
