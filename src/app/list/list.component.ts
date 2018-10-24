import { Component, OnInit } from '@angular/core';
import { Item } from "../../modelo/item";
import {MockItemsService} from "../_service/mock-items.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
items:Item[];
  constructor(private service:MockItemsService) { 
  	
  		this.updateLocalItems();
  }

  ngOnInit() {
  }
  updateLocalItems(){
  	this.service.getItems().subscribe(items => this.items=items);
  }
  
  	onRemove(item:Item){
    this.service.remove(item).subscribe(serviceItems=>{
      this.items=serviceItems;
    });
  }
 


}
