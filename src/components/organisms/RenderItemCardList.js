import React from 'react';
import ItemCard from './ItemCard';

const RenderItemCardList = props =>{

        return(<div className ="renderItemCardList__container"> 
                {props.list && props.list.map((item,index) =>
                    <ItemCard 
                    key={index}
                    item={item} 
                    content ={props.content} 
                    contentDiary ={props.contentDiary}
                    list ={props.list} 
                    onChangeItem={props.onChangeItem}
                    checkIfFavorite ={props.checkIfFavorite}
                    addItem ={props.addItem}
                    />
                )}
            </div>);
}

export default RenderItemCardList;




