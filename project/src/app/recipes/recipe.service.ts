import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  recipeSeleted = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Description 1', 'https://www.onegreenplanet.org/wp-content/uploads/2015/03/Fresh-Summer-Rolls-1200x800.jpg', [
          new Ingredient('Banana', 10)
        ]),
        new Recipe('Test Recipe 2', 'Test it', 'https://www.onegreenplanet.org/wp-content/uploads/2015/03/Fresh-Summer-Rolls-1200x800.jpg', [
          new Ingredient('Lemon', 12),
          new Ingredient('Lettuce', 10) 
        ]),
        
  ];



  getRecipe(){
    return this.recipes.slice();
  }
}