import React from 'react';
import ArticleCard from './ArticleCard';

const RenderArticleCardList = props => {

    const renderArticles = props.items.map((item,index) =>
        <ArticleCard 
            key ={index}
            item = {item}
            checkIfFavorite = {props.checkIfFavorite}
            onChangeItem ={props.onChangeItem}
            type ={props.type}
        />
    );


    return (
        <div className ="renderArticleCardList__container">
            <div className ="renderArticleCardList__heading">
                <h3 className= "renderArticleCardList__heading--text heading heading__s">
                <i className="caret square down icon"></i>
                    {` ${props.heading}`}
                </h3>
            </div>

                {props.items && renderArticles}
        </div>
    );

};
export default RenderArticleCardList;