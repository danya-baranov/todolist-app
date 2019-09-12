import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  isChecked = true;

  constructor(private itemService : ItemService) { }

  onChange($event):void{
    console.log('$event');
    
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  addItem(title: string, description:string):void{
    let tempItem = new Item();
    if(!title)
    {
      return;
    }
    if(!description)
    {
      return;
    }
    tempItem.title = title.trim();
    tempItem.description = description.trim()

    this.itemService.addItem(tempItem).
    subscribe(item =>{
      this.items.push(item);
    });
  }

  delete(item : Item):void {
    this.items = this.items.filter(h => h !=item);
    this.itemService.deteleItem(item).subscribe();
  }

}
