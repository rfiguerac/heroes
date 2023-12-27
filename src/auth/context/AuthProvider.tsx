import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthState, authReducer } from "./authReducer";

const initialState:AuthState ={
    logged:false,
    name:''
}



const init = () => {

  if(localStorage.getItem('user') != null){
     return {
        logged:true,
        name:''+localStorage.getItem('user')
    }
  } else{
    return {
      logged:false,
      name:''
    }
  } 

}

export const AuthProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(authReducer,initialState, init);

    //iniciar sesion

    const singIn = (name:string) =>{
      localStorage.setItem('user', name);
      dispatch({
        type:'[Auth] Login',
        payload:{
            name:name,
        }
    });
    
    }


    const logOut = () => {
      dispatch({
        type:'[Auth] Logout',
    });
    localStorage.removeItem('user');
    }

  return (
    <AuthContext.Provider value={{...state, dispatch,singIn,logOut}}>
        {children}
    </AuthContext.Provider>
  )
}
