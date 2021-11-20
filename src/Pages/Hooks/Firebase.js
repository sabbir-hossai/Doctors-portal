import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

import initializeAuthontication from "../../firebase/Firebase.init";



initializeAuthontication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoding, setIsLoging] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const handelGoogleSignUp = () => {
        setIsLoging(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)


    }

    const handelGoogleSignOut = () => {
        localStorage.removeItem('user')
        setIsLoging(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                setError(error.messeage)
            })
            .finally(() => {
                setIsLoging(false)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })

    }, []);

    return {
        user,
        isLoding,
        setIsLoging,
        error,
        setError,
        handelGoogleSignUp,
        handelGoogleSignOut
    }
}
export default useFirebase;