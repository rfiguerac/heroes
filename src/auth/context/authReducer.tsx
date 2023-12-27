

//esta interface representa como se va a ver nuestro estado
export interface AuthState {
    logged:boolean,
    name:string
}


// los tipos de caso que va a resolver mi reducer
type types =
    | { type: '[Auth] Login', payload:{name:string}}
    | { type: '[Auth] Logout'};

//reducer
export const authReducer = (state: AuthState, action:types): AuthState => {
    switch (action.type) {
        case '[Auth] Login':
            return {
                logged:true,
                name:action.payload.name,
            }
        
        case '[Auth] Logout':
            return {
                logged:false,
                name:''
            };
        default:
            return state;
    }
}