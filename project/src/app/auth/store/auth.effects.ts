import { Actions, ofType } from '@ngrx/effects';
import * as AuthActions from '../store/auth.actions';

export class AuthEffects {

    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START))

    // dollar sign = observable
    constructor(private actions$: Actions ) {

    }
}