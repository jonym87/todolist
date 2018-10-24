import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import  {NewItemComponent} from "./new-item/new-item.component";

var routes:Routes = [
		{path:"", redirectTo:"/items", pathMatch:"full"}
		{path:"items", component: ListComponent}
		{path: "newItem", component: NewItemComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
