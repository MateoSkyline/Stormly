import { Component, OnInit } from '@angular/core';
import { Search } from 'src/app/models/search.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cities-cache',
  templateUrl: './cities-cache.component.html',
  styleUrls: ['./cities-cache.component.css']
})
export class CitiesCacheComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  cities: Search[] = [];

  ngOnInit(): void {
    this.getCities();
  }

  getCities() : void {
    this.cities = this.storageService.get();
  }

}
