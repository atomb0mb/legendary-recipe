import {Action} from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
// ADD AN INGREDIENT
export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
// ADD LIST OF INGREDIENTS
export const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
// Update an ingredient
export const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
// delete an ingredient
export const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
// start editing state
export const START_EDIT = '[Shopping List] Start Edit';
// Stop edit State 
export const STOP_EDIT = '[Shopping List] Stop Edit';

export class AddIngredient implements Action{
    readonly type =  ADD_INGREDIENT;
 

    constructor(public payload: Ingredient){}
}

export class AddIngredients implements Action{
    readonly type =  ADD_INGREDIENTS;
 

    constructor(public payload: Ingredient[]){}
}

export class UpdateIngredient implements Action{
    readonly type =  UPDATE_INGREDIENT;
 

    constructor(public payload: Ingredient){}
}

export class DeleteIngredients implements Action{
    readonly type =  DELETE_INGREDIENT;

}

export class StartEdit implements Action {
    readonly type =  START_EDIT;
 

    constructor(public payload: number){}
}

export class StoptEdit implements Action {
    readonly type =  STOP_EDIT;
}
// typescript feature
export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredients | StartEdit | StoptEdit;