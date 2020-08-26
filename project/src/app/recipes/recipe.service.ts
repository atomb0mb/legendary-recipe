import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable() // you want to inject a service into a service
export class RecipeService {


  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Description 1', 'https://www.onegreenplanet.org/wp-content/uploads/2015/03/Fresh-Summer-Rolls-1200x800.jpg', [
          new Ingredient('Banana', 10)
        ]),
        new Recipe('Test Recipe 2', 'Test it', 'https://www.onegreenplanet.org/wp-content/uploads/2015/03/Fresh-Summer-Rolls-1200x800.jpg', [
          new Ingredient('Lemon', 12),
          new Ingredient('Lettuce', 10) 
        ]),
        
  ];


  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(idx: number){
    // return this.recipes.slice();
    return this.recipes[idx];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addAllIngredient(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}