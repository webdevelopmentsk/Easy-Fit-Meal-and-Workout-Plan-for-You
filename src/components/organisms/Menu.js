import React from 'react';

const Menu = props =>{

    return(
        <>
            <div className="menu">
                <h2 className ="menu-heading"> Easy Fit </h2>
                <div onClick = {props.onClickMenu} className="menu-burger">
                    <span className="menu-burger__line menu-burger__line_1"/>
                    <span className="menu-burger__line menu-burger__line_2"/>
                    <span className="menu-burger__line menu-burger__line_3"/>
                </div>
            </div>
        </>
    )
}

export default Menu;
