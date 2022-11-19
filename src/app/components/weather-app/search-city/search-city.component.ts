import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { MessageService } from 'primeng/api';
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
  @Input() cityButton!: string;
  @Output() weather = new EventEmitter<Weather>();

  constructor(
    private weatherService: WeatherService, 
    private storageService: StorageService, 
    private messageService: MessageService,
    private loader: LoadingService
  ) { }

  city: string = '';

  ngOnChanges(changes: SimpleChange) : void {
    if(this.cityButton != undefined){
      this.city = this.cityButton;
      this.getWeather();
    }
  }

  getWeather() {
    this.loader.show();
    this.weatherService.getWeatherForCity(this.city)
      .subscribe({
        next: (result: Weather) => {
          this.storageService.add(this.city);
          this.weather.emit(result);
          this.loader.hide();
          this.city = '';
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Something wrong happened...',
            detail: 'We are sorry, but your request cannot be processed right now!'
          });
          this.loader.hide();
          console.log(error);
        }
      })
  }

}
