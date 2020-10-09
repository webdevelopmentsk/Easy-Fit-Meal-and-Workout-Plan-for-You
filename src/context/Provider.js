import React, { useState } from 'react';
import { initialState } from '../data/initialState';

export const Context = React.createContext();

const Provider = props => {

    const [state, setState] = useState(initialState);

    return(
        <Context.Provider value={
        {state,
             reset: () => setState(initialState),
             changeState: (propName,value) => setState({...state,[propName]: value}),
        }
        }>
            {props.children}
        </Context.Provider>
    );      
}

export default Provider;

