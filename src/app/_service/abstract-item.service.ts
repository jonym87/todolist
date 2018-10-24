import { Injectable } from '@angular/core';
import {Item} from "../../modelo/Item";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export abstract class AbstractItemService {

  constructor() {
  }

  abstract getItems():Observable<Item[]>;
}
