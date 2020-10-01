import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeCardList = props =>{

        return(<> 
                {props.list && props.list.map((item,index) =>
                    <div key={index}>
                    <RecipeCard 
                    item={item} 
                    content ={props.content} 
                    contentFoodDiary ={props.contentFoodDiary}
                    list ={props.list} 
                    onChangeItem={props.onChangeItem}
                    checkFavoriteRecipe ={props.checkFavoriteRecipe}
                    onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
                    /></div>
                )}
            </>);
}

export default RecipeCardList;




