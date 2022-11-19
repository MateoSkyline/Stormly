import { Component, Input, SimpleChange } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-outlet',
  templateUrl: './weather-outlet.component.html',
  styleUrls: ['./weather-outlet.component.css']
})
export class WeatherOutletComponent {
  @Input() weatherString: string = '';
  @Input() city: string = '';

  constructor() { }

  weather!: Weather;

  ngOnChanges(changes: SimpleChange) : void {
    if(this.weatherString != undefined)
      this.weather = JSON.parse(this.weatherString);
    console.log(this.weather);
  }

}
