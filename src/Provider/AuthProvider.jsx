

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import app from "../Firebase/Firebase.config";
import { AuthContext } from "../Context/AuthContext";
import { useEffect, useState } from "react";


const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)




    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signInOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authData = {
        signInWithGoogle,
        user,
        loading,
        signInOut
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;