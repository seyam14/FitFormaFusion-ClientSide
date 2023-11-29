import {  createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";
import axios from "axios";




const auth = getAuth(app);
export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      // 
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axios.post('https://b8a12-server-side-seyam14.vercel.app/jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                }
            })
    }
    else {
        // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
        localStorage.removeItem('access-token');
    }


      // 
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logout = () => {
    return signOut(auth);
  };


   
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
        
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        logout
    }

    return (
        <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;