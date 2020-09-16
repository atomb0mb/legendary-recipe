import {Ingredient} from '../shared/ingredient.model';
import * as slaction from './shopping-list.actions';

const initialState = {

   ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
      
}

export function shoppingListReducer(state = initialState, action: slaction.AddIngredient) {
    switch(action.type) {
        case slaction.ADD_INGREDIENT:
            return {
            ...state,
            ingredient: [...state.ingredients, action.payload]
            }
    }
}