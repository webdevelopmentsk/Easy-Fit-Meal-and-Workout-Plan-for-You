import React from 'react';

import IngredientCard from '../molecules/IngredientCard';

const IngredientCardList = props => {

    return(
    <> 
            {props.list ?
            props.list.map((item,index) => <IngredientCard key={index} item ={item}/>)
            :null}
    </>

    );
};

export default IngredientCardList;