import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.module';
import { Router } from '@angular/router';

// Define response payload for the type of post
export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean; // question mark means this is optional
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new BehaviorSubject<User>(null);

    tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {
    }

    // request body payload
    signUp(param_email: string, param_password: string) {

        // console.log(param_email);
        // console.log(param_password);

        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVbJI4MEOpnKxHFHToN2zRJzJaWePuZO8', {
            email: param_email, // property type... check doc
            password: param_password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(respData => {

            this.handleAuthentication(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
        }));
    }

    //
    login(param_email: string, param_password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVbJI4MEOpnKxHFHToN2zRJzJaWePuZO8', {
            email: param_email,
            password: param_password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(respData => {

            this.handleAuthentication(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
        }));
    }

    autoLogin(){
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string,

        } = JSON.parse(localStorage.getItem('userData'));
        
        if(!userData) {
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData.id, new Date(userData._tokenExpirationDate));

        if(loadedUser.token) {
            this.user.next(loadedUser);
            const expirationTimeLeft = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime(); // reminding time - current time
            this.autoLogout(expirationTimeLeft);
        }
    }

    // user subject set to null
    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number){
       this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration)
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expireDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(email, userId, token, expireDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }


    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = "An error occured!"
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage)
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = "This email already existed."
                break;
            case 'INVALID_PASSWORD':
                errorMessage = "This password or email is invalid."
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = "This password or email is invalid."
                break;
        }
        return throwError(errorMessage)
    }

}


