import {Action} from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
// ADD AN INGREDIENT
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
// ADD LIST OF INGREDIENTS
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action{
    readonly type =  ADD_INGREDIENT;
 

    constructor(public payload: Ingredient){}
}

export class AddIngredients implements Action{
    readonly type =  ADD_INGREDIENTS;
 

    constructor(public payload: Ingredient[]){}
}
// typescript feature
export type ShoppingListActions = AddIngredient | AddIngredients;