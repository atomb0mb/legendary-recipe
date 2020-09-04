import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RecipeService } from '../recipes/recipe.service'
import { Recipe } from '../recipes/recipe.model'
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://lengendaryrecipe.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response);
        });

    }

    getRecipes() {
        const recipes = this.recipeService.getRecipes();
        //
        this.http.get<Recipe[]>('https://lengendaryrecipe.firebaseio.com/recipes.json').pipe(map(recipe => {
            // to handle if no entry to ingredient or undefined
            return recipe.map(recipe =>{
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: [] }
            })
        }))
            .subscribe(recipes => {
                this.recipeService.setRecipes(recipes)
            });

    }

}