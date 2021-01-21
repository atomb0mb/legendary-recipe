import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: ()=> import('./recipes/recipes.module').then(x => x.RecipesModule)},
  { path: 'shopping-list', loadChildren: ()=> import('./shopping-list/shopping-list.module').then(y => y.ShoppingListModule)},
  { path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(z => z.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
