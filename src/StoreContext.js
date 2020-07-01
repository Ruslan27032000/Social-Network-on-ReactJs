import React from "react";

const StoreContext = React.createContext(null);

export const  Provider = (props)=>{
    return(
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export const Consumer = (props) =>{
    return(
        <StoreContext.Consumer value={props.state}>
            {props.children}
        </StoreContext.Consumer>
    )
}

export default StoreContext;



