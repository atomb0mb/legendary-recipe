import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AuthActions from '../store/auth.actions';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// interface for post type
export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
  }

// helper authentication
const handleAuthentication = (expiresIn: number, email: string, userId: string, token: string ) => {
    
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
            return new AuthActions.AuthenticateSuccess({
                email: email, 
                userId: userId, 
                token: token,
                expirationDate: expirationDate
             });
}
// helper of error message
const handleError = (errorRes: any) => {

    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
    return of(new AuthActions.AuthenticateFail(errorMessage));
    }
    switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
    case 'EMAIL_NOT_FOUND':
        errorMessage = 'Invalid email or password.'; // use . to recognize email not found
        break;
    case 'INVALID_PASSWORD':
        errorMessage = 'Invalid email or password';
        break;
    }

    return of(new AuthActions.AuthenticateFail(errorMessage)); // observable

}

// need injectable  
@Injectable()
export class AuthEffects {

    @Effect()
    authSignUp = this.actions$.pipe(
        ofType(AuthActions.SIGNUP_START),
        switchMap((signupAction: AuthActions.SignupStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.fireBaseAPIKey,
                {
                    email: signupAction.payload.email,
                    password: signupAction.payload.password,
                    returnSecureToken: true
                }).pipe(
                    map(resData => {
                       return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
                    }),
                    catchError(errorRes => {
                        return handleError(errorRes);
                    }), 
                    )
        })
        );

    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http
            .post<AuthResponseData>(
              'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.fireBaseAPIKey,
              {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true
              }).pipe(
                    map(resData => {
                        return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
                    }),
                    catchError(errorRes => {
                        return handleError(errorRes);
                    }), 
                    )
        })
        );
        @Effect({dispatch: false})
        authSucess = this.actions$.pipe(ofType(AuthActions.AUTHENTICATE_SUCCESS), tap(() => {
            this.router.navigate(['/']);
        }));
    // dollar sign = observable
    constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}
}