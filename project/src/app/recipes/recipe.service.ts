import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSeleted = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Description 1', 'https://www.onegreenplanet.org/wp-content/uploads/2015/03/Fresh-Summer-Rolls-1200x800.jpg'),
        new Recipe('Test Recipe 2', 'Test it', 'https://www.onegreenplanet.org/wp-content/uploads/2015/03/Fresh-Summer-Rolls-1200x800.jpg'),
        
  ];



  getRecipe(){
    return this.recipes.slice();
  }
}