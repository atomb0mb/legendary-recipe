import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
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
    this.dataStorageService.storeRecipes();
  }
  // get the recipe from the database
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  // log out from the application or end the session manually
  onLogout() {
    this.authService.logout();
  }
  // to release memory
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
