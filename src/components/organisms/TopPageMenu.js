import React from 'react';
import { content } from '../../data/content'

const TopPageMenu = props =>{

    return(

        <div className="topPageMenu__container">
            <div className="topPageMenu__heading">
                <h1 className ="topPageMenu__heading__text"> 
                {content.appLogo.name} 
                <div className ="topPageMenu__heading__underline"></div>
                </h1>
                
            </div>
            <div onClick = {props.onClickMenu} className="topPageMenu__burger">
                <span className="topPageMenu__burger__line topPageMenu__burger__line_1"/>
                <span className="topPageMenu__burger__line topPageMenu__burger__line_2"/>
                <span className="topPageMenu__burger__line topPageMenu__burger__line_3"/>
            </div>
        </div>

    )
}

export default TopPageMenu;
