import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Description 1', 'https://www.onegreenplanet.org/wp-content/uploads/2015/03/Fresh-Summer-Rolls-1200x800.jpg'),
    new Recipe('Test Recipe 2', 'Test it', 'https://www.onegreenplanet.org/wp-content/uploads/2015/03/Fresh-Summer-Rolls-1200x800.jpg'),
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(info: Recipe){
    this.recipeWasSelected.emit(info);
  }

}
