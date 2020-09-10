import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'
import { RecipeResolverService } from './recipes/recipe-resolver.service';

//s
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // only redirect if the full path is empty
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            {
                path: ':id',
                component: RecipesDetailComponent,
                resolve: [RecipeResolverService]
            },
            {
                path: ':id/edit',
                component: RecipeEditComponent,
                resolve: [RecipeResolverService]
            },
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}