import React, {createContext, useState} from 'react';

export let myContext = createContext();

export const Context = ({children}) => {
    let [site, setSite] = useState();
    return (
        <myContext.Provider value={{site, setSite}}>
            {children}
        </myContext.Provider>
    );
}
