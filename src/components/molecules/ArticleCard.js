import React from 'react';
import IconFavorite from '../atoms/IconFavorite';

const ArticleCard = props => {

    const isLiked = props.checkIfFavorite(props.item);

    return(
        <div className ="articleCard__container">
            <div className ="articleCard__like">
                <IconFavorite isLiked = {isLiked} 
                onClickIcon = {props.onChangeItem} 
                item = {props.item} 
                type = {props.type} 
                />
            </div>
            <div className = "articleCard__heading">
                {props.item.title}
            </div>
            <a 
            href={props.item.url} target="_blank"
            className = "articleCard__image"
            >
                <img className = "articleCard__image--content" src={props.item.urlToImage} alt="Article's Image"/>
            </a>
            <div className = "articleCard__meta">
                <div className = "articleCard__meta__date">{props.item.publishedAt}</div>
                <div className = "articleCard__meta__source">{props.item.source.name}</div>
            </div>
            <div className = "articleCard__description">
                {props.item.description} 
                <a className = "articleCard__description__link"
                href={props.item.url} target="_blank"
                >
                    Read More &#x2192;
                </a>
            </div>

        </div>
    );
};

export default ArticleCard;