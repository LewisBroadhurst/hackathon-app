import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({
    user: {}
});


export const UserProvider = ({children}) => {

    const [user, setUser] = useState({});

    const login = (userLogin) => {
        setUser(userLogin);
    };
    

    const logout = () => {
        setUser({});
    };

    const value = {user, login, logout};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};