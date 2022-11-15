import { Component, EventEmitter, Output } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { LoadingService } from 'src/app/services/loading.service';
import { StorageService } from 'src/app/services/storage.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent {
  @Output() weather = new EventEmitter<Weather>();

  constructor(private weatherService: WeatherService, private storageService: StorageService, private loader: LoadingService) { }

  city: string = '';

  getWeather() {
    this.loader.show();
    this.weatherService.getWeatherForCity(this.city)
      .subscribe((result: Weather) => {
        this.storageService.add(this.city);
        this.weather.emit(result);
        this.loader.hide();
        this.city = '';
      });
  }

}
