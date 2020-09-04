import { Injectable } from '@angular/core'
import { DataStorageService } from '../shared/data-storage.service'
import { Recipe } from './recipe.model'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {

    constructor(private dataService: DataStorageService, private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length == 0) {
            return this.dataService.getRecipes();
        } else {
            return recipes;
        }
        
    }
}