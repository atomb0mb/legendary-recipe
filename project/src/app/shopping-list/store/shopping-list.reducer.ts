import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {

   ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
      
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
            ...state, // CALL existing state
            ingredients: [...state.ingredients, action.payload] // override
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
            ...state,
            ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient, // copy
                ...action.payload.ingredient //override
            }
            // The list of ingredients
            const updatedIngredients = [...state.ingredients]
            updatedIngredients[action.payload.index] = updatedIngredient;
            return {
            ...state,
            ingredients: updatedIngredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
            ...state,
            ingredients: state.ingredients.filter((ingrd, idx) =>  {
                return idx !== action.payload;
            })
            }              
                   
        default:
            return state;    
    }
}