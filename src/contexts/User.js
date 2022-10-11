import { createContext, useState } from "react";

export const UserContext = createContext();

// create component that stores state of loggedInUser and provides that state

export const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    // provide loggedInUser to all the children (App)

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {props.children}
        </UserContext.Provider>
    );
};