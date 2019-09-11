import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const items = [
      
    ];
    return {items};
  }
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1 ;
  }
}
