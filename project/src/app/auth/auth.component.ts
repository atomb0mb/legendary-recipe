import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import * as fromApp from '../store/app.reducer'
import * as AuthActions from '../auth/store/auth.actions';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>,
  ) {}

  ngOnInit(){
      this.store.select('auth').subscribe(authState => {
        this.isLoading = authState.loading;
        this.error = authState.authError;

    }, errorMessage => {
          //console.log(errorMessage);
          if(this.error){
          this.error = errorMessage;
          this.isLoading = false;
          }
        }
      )
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      this.store.dispatch(new AuthActions.LoginStart({email: email, password: password}));
    } else {
      this.store.dispatch(new AuthActions.SignupStart({email: email, password: password}));
    }

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }


}
