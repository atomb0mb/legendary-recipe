import {Action} from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
// ADD AN INGREDIENT
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
// ADD LIST OF INGREDIENTS
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
// Update an ingredient
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
// delete an ingredient
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
// start editing state
export const START_EDIT = 'START_EDIT';
// Stop edit State 
export const STOP_EDIT = 'STOP_EDIT';

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