import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({
    user: {},
    comm: {},
});


export const UserProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [comm, setComm] = useState({});

    const login = (userLogin) => {
        setUser(userLogin);
    };
    

    const logout = () => {
        setUser({});
    };

    const loginComm = (userLogin) => {
        setComm(userLogin);
    };
    

    const logoutComm = () => {
        setComm({});
    };

    const value = {user, login, logout, comm, loginComm, logoutComm};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};