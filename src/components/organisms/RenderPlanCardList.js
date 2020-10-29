import React , { useState }from 'react';
import PlanCard from '../molecules/PlanCard';

const RenderPlanCardList = props => {

    const {content,onClickOption} = props;
    const [selectedIndex , setSelectedIndex ] = useState(0);

    const onCardSelected = (option,type,cardKey) =>{
        setSelectedIndex(cardKey);
        onClickOption(option,type);
    };

    return(
        <div className ="renderPlanCardList__container">
            <div className ="renderPlanCardList__heading">
                <h2 className= "heading heading__s BG__orangeYellow">{content.text}
                </h2>
            </div>
                <div className ="renderPlanCardList__group">
                {
                    content.options.map((option,index) => 
                    <PlanCard 
                    key ={index} 
                    cardKey = {index}
                    setClassName = {`planCard__container planCard__container__${index === selectedIndex ? true : false}`}
                    type = {content.type}
                    option = {option}
                    onClickOption ={onCardSelected} />)
                }
                </div>
        </div>
    );
};

export default RenderPlanCardList;

//<div className ="renderPlanCardList__heading--underline"></div>