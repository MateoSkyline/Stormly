import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// PrimeNG imports
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

// Components

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';
import { SearchCityComponent } from './components/weather-app/search-city/search-city.component';
import { CitiesCacheComponent } from './components/weather-app/cities-cache/cities-cache.component';
import { WeatherOutletComponent } from './components/weather-app/weather-outlet/weather-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    SearchCityComponent,
    CitiesCacheComponent,
    WeatherOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
