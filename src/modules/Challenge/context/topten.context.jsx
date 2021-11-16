import React from "react";

export const TopTenContext = React.createContext({});

export const TopTenConfigProvider = ({children, ...value}: Props) => {
    return (
        <TopTenContext.Provider value={value}>
            {children}
        </TopTenContext.Provider>
    )
} 

export default TopTenConfigProvider;