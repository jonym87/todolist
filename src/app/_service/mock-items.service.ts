import { Injectable } from '@angular/core';
import {Item} from "../../modelo/Item";
import {Observable} from "rxjs";
import {AbstractItemService} from "./abstract-item.service";

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemService {
items:Item[];
  constructor() {
  		super();
  		this.items=[
  			new Item("Comprar carne"),
  			new Item("Comprar verdura"),
  			new Item("Comprar carbon"),
        new Item("Comprar pisco")
  		]
   }
   getItems(): Observable<Item[]> {
    return new Observable((obs) => {
        obs.next(this.items);
        obs.complete();
    });
};

    remove(item:Item):Observable<Item[]>{
     return new Observable((obs)=>{
       this.items=this.items.filter(it => it !==item);
       obs.next(this.items);
       obs.complete();
     })
    }
    addItem(item:Item){
        console.log("mock-item: add");
        return new Observable((obs)=>{
           this.items.push(item);
           obs.next(this.items);
           obs.complete();
     })
    }

 } 