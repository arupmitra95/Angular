import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[]=[
  new Ingredient('Orange', 12),
  new Ingredient('Apple', 10),];
  constructor() { }

  ngOnInit(): void {
  }

}
