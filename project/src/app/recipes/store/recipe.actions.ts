import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPE = '[Recipes] Set Recipes';
export const FETCH_RECIPE = '[Recipes] Fetch Recipes';

export class SetRecipes implements Action {
    readonly type = SET_RECIPE;

    constructor(public payload: Recipe[]){

    }
}

export class FetchRecipes implements Action {
    readonly type = FETCH_RECIPE;
}

export type RecipesActions = SetRecipes | FetchRecipes;