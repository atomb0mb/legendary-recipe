import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPE = '[Recipes] Set Recipes';
export const FETCH_RECIPE = '[Recipes] Fetch Recipes';
export const ADD_RECIPE = '[Recipes] Add Recipes';
export const UPDATE_RECIPE = '[Recipes] Update Recipes';
export const DELETE_RECIPE = '[Recipes] Delete Recipes';
export const STORE_RECIPE = '[Recipes] Store Recipes';

export class SetRecipes implements Action {
    readonly type = SET_RECIPE;

    constructor(public payload: Recipe[]){

    }
}

export class FetchRecipes implements Action {
    readonly type = FETCH_RECIPE;
}

export class AddRecipe implements Action {
    readonly type = ADD_RECIPE;

    constructor(public payload: Recipe){

    }
}
export class UpdateRecipe implements Action {
    readonly type = UPDATE_RECIPE;

    constructor(public payload: {index: number, newRecipe: Recipe}){

    }
}

export class DeleteRecipe implements Action {
    readonly type = DELETE_RECIPE;

    constructor(public payload: number){

    }
}

export class StoreRecipe implements Action {
    readonly type = STORE_RECIPE;
}

export type RecipesActions = SetRecipes | FetchRecipes | AddRecipe | UpdateRecipe | DeleteRecipe | StoreRecipe;