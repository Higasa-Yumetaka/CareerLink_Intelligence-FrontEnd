import React, {createContext, useContext, useState} from "react";

const GlobalNavContext = createContext(undefined);
export const useGlobalNavContext = () => useContext(GlobalNavContext);

export const GlobalNavProvider = ({ children }) => {
    const [navBarState, setNavBarState] = useState();
    return (
        <GlobalNavContext.Provider value={ [navBarState, setNavBarState] }>
            {children}
        </GlobalNavContext.Provider>
    );
};

export default GlobalNavProvider;