import React from 'react';


const RandomQuoteCard = props =>{

    return(
        <div className = 'randomQuoteCard__container'>

            {
                props.items.map((item,index) => {
                return(
                    <div key = {index} className ="randomQuoteCard__content">
                        <div className ="randomQuoteCard__content__quote">{item.quoteText}</div>
                        <div className ="randomQuoteCard__content__author">{item.quoteAuthor}</div>
                    </div>
                );
                })
            }
        </div>
    )

};

export default RandomQuoteCard;