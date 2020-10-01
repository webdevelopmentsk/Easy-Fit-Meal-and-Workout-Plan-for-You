import React from 'react';
import OptionCard from '../molecules/OptionCard';

const ChooseOptionList = props => {

    const {content,onClickOption} = props
    return(
        <>
            <br />
            <div><h3> {content.text} </h3></div>
                <div style = {{display:"flex",flexWrap:"wrap"}}>
                {
                    content.options.map((option,index) => 
                    <OptionCard key ={index} 
                    type = {content.type}
                    option = {option}
                    onClickOption ={onClickOption} />)
                }
                </div>
            <br />
        </>
    );
};

export default ChooseOptionList;