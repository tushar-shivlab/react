import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
    const role = Cookies.get('role');
    const [userDetails, setUserDetails] = useState({
        username: role ? role : '',
    });

    return (
        <UserContext.Provider value={userDetails}>
            <UserDispatchContext.Provider value={setUserDetails}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext, UserDispatchContext };
