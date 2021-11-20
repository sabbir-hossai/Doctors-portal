import React, { createContext } from 'react';
import useFirebase from '../Pages/Hooks/Firebase';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    // const { childern } = props;
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;