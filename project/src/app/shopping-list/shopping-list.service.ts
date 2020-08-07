import {Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsChange = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Oranage', 10)
      ];

    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
    }

    addAllIngredient(ingredients: Ingredient[]){
        // for( let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        
        //spread operator
        this.ingredients.push(...ingredients);
        this.ingredientsChange.emit(this.ingredients.slice());
    }
}

 