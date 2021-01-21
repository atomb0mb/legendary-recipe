import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(

    private store: Store<fromApp.AppState>
  ) { }
  // hide the recipe tab if not login
  ngOnInit() {
    this.userSub = this.store.select('auth').pipe(map(authState => { return authState.user })).subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  // save the recipe to the database
  onSaveData() {
    this.store.dispatch(new RecipesActions.StoreRecipe());
  }
  // get the recipe from the database
  onFetchData() {
    this.store.dispatch(new RecipesActions.FetchRecipes());
  }
  // log out from the application or end the session manually
  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
  // to release memory
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
