import React from 'react';

const RenderRecipeIngredientList = props => {

    return(
    <> 
            {props.list ?
            props.list.map((item,index) => 
            <div key={index}>
                {item.image && <img style={{height: "30px"}} alt={item.text} src={item.image}/>}
                <span>{item.text}</span>
            </div>)
            :null}
    </>

    );
};

export default RenderRecipeIngredientList;
