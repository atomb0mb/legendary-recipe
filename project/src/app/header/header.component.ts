import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}
  // hide the recipe tab if not login
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
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
