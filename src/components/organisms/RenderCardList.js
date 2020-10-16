import React from 'react';
import Card from './Card';

const RenderCardList = props =>{

        return(<> 
                {props.list && props.list.map((item,index) =>
                    <div key={index}>
                    <Card 
                    item={item} 
                    content ={props.content} 
                    contentDiary ={props.contentDiary}
                    list ={props.list} 
                    onChangeItem={props.onChangeItem}
                    checkIfFavorite ={props.checkIfFavorite}
                    addItem ={props.addItem}
                    /></div>
                )}
            </>);
}

export default RenderCardList;




