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
             change2State: (propName1,value1,propName2,value2) => setState(
                 {...state,
                    [propName1]:value1,
                    [propName2]:value2
                 }
             )
        }
        }>
            {props.children}
        </Context.Provider>
    );      
}

export default Provider;

