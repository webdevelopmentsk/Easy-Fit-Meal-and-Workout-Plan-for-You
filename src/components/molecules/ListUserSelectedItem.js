import React from 'react';
import IconTrash from '../atoms/IconTrash'

const ListUserSelectedItem = props => {

    return(
        <>
            <div>{props.option.name}</div>
            {props.state[props.option.value] ?
            props.state[props.option.value].map((item,index) => 
            <div key={index}>{item}<IconTrash deleteItem = {props.deleteItem} type={props.option.value}/></div>)
            : null}

        </>
    )

}

export default ListUserSelectedItem;



