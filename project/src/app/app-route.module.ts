import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';


const appRoutes: Routes = [
    { path: '',  redirectTo: '/recipes', pathMatch: 'full' }, // only redirect if the full path is empty
    { path: 'recipes', component: RecipesComponent, children:[
        {path: '', component: RecipeStartComponent },
        {path: ':id', component: RecipesDetailComponent },
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
  ];



@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}