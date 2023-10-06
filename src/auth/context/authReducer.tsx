

//esta interface representa como se va a ver nuestro estado
export interface AuthState {
    status: 'checking' | 'authenticated' | 'notAuthenticated';
}


type types =
    | { type: '[Auth] Login' }
    | { type: '[Auth] Logout'};




export const authReducer = (state: AuthState, action:types): AuthState => {
    switch (action.type) {
        case '[Auth] Login':
            return state;
        
        case '[Auth] Logout':
            return state;
        default:
            return state;
    }
}