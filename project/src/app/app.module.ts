import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module'
import { AuthModule } from './auth/auth.module';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule} from "@ngrx/store-devtools"
import * as fromApp from './store/app.reducer'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    EffectsModule.forRoot([AuthEffects]),
    SharedModule,
    CoreModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
  //providers: [LoggingService]
})
export class AppModule { }
