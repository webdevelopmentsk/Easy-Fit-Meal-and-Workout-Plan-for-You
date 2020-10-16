import React from 'react';
import PopupWorkout from './PopupWorkout';

const workoutCard = props =>{

    const [showPopUp,setShowPopUp] = useState(false);

    const togglePopup = () => {
        setShowPopUp(!showPopUp);
    }

    return(
        <>
        <div className= "ui card">
            < Image alt={props.item.label} src={props.item.image} href="#" onClickImage={togglePopup} />
            <div className ="content">
                <div className="header">{props.item.label}</div>
                <div className="meta">
                <div><IconClock />{props.item.totalTime===0? 30: props.item.totalTime}<span>  </span>{props.content.units.time}</div>
                <div><IconPerson />{props.item.yield}<span>  </span>{props.content.units.portion}</div>
                <div><IconBurn />{Math.round(props.item.calories/props.item.yield)}<span>  </span>{props.content.units.calories}</div>
                </div>
            </div>
        </div>
        {showPopUp && < PopupWorkout
                        update = {showPopUp}
                        />}
        </>
    );

};

export default workoutCard;