import React from 'react';
import ShowList from '../molecules/ShowList';

const ListContainer = props => {

    return(
        <>
            <br />
            <div>{props.option.name}</div>
            {props.state[props.option.value] ?
                <ShowList 
                list = {props.state[props.option.value]}
                type = {props.option.value}
                deleteItem ={props.deleteItem}
                />

            : null}

        </>
    )

}

export default ListContainer;


