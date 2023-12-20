import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const googleProvider=new GoogleAuthProvider()

    // craete a user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update user profile
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    // signin user
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout the user
    const logOut=()=>{
      return  signOut(auth)
    }

    const googleSignin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
   useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log('observing user')

    })
    return (()=>unSubscribe())
},[])
    


    const authInfo={user,createUser,updateUserProfile,signIn,logOut,googleSignin}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;