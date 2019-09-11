import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Item } from './item';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'api/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemsUrl)
  }

  getItem(id:number): Observable<Item>{
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url)
  }

  updateItem (item:Item): Observable<any>{
    return this.http.put(this.itemsUrl, item, this.httpOptions)
  }

  addItem (item : Item): Observable<Item>{
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions);
  }

  deteleItem(item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itemsUrl}/${id}`;
  
    return this.http.delete<Item>(url, this.httpOptions);
  }
}
