import { Injectable } from '@angular/core';
import { Search } from '../models/search.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get() : Search[] {
    var storage = localStorage.getItem('weather_searchs');
    var items: Search[] = JSON.parse(storage ? storage : '[]');
    return items;
  }

  save(items: Search[]) : void {
    var storage = JSON.stringify(items);
    localStorage.setItem('weather_searchs', storage);
  }

  add(city: string) : void {
    var items = this.get();
    var newItem = this.prepareInstance(city);

    if(items.some(i => i.city.toLowerCase() == city.toLowerCase())) {
      items = this.addDuplicated(newItem, items);
    }
    else {
      items = this.addNew(newItem, items);
    }

    this.save(items);
  }

  prepareInstance(city: string) : Search {
    var newItem = new Search();
    newItem.city = city;
    newItem.date = new Date();
    return newItem;
  }

  addDuplicated(newItem: Search, items: Search[]) : Search[] {
    items = items.filter(i => i.city != newItem.city);
    items.unshift(newItem);
    return items;
  }

  addNew(newItem: Search, items: Search[]) : Search[] {
    if(items.length >= 3)
      items.pop();
    items.unshift(newItem);
    return items;
  }
}
