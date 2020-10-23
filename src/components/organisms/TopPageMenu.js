import React from 'react';
import { content } from '../../data/content'

const TopPageMenu = props =>{

    return(
        <>
            <div className="menu">
                <div className="menu__heading">
                    <h1 className ="menu__heading__text"> {content.appLogo.name} </h1>
                    <div className ="menu__heading__border"></div>
                </div>
                <div onClick = {props.onClickMenu} className="menu__burger">
                    <span className="menu__burger__line menu__burger__line_1"/>
                    <span className="menu__burger__line menu__burger__line_2"/>
                    <span className="menu__burger__line menu__burger__line_3"/>
                </div>
            </div>
        </>
    )
}

export default TopPageMenu;
