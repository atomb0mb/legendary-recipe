import { Injectable } from '@angular/core'
import { DataStorageService } from '../shared/data-storage.service'
import { Recipe } from './recipe.model'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {

    constructor(private dataService: DataStorageService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataService.getRecipes();
        
    }
}