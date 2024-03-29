import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null);
const auth=getAuth(app);
//Google sign in
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
       }

       const logInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
       }
       const logOut=()=>{
        setLoader(true);
         return signOut(auth)
       }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
          console.log('auth state change',currentUser);
          setUser(currentUser);
          setLoader(false);
        });
        return ()=>{
          unsubscribe();
        }
    
       },[])

    
    const authenticationInfo={
       user,
       loader,createUser,
       signIn,
       logInWithGoogle,
       logOut,
    }
    return (
        <AuthContext.Provider value={authenticationInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;