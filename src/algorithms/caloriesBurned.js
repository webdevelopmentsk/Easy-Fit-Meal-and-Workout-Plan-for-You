import { activities } from '../data/activities';


const convertTometric = (unit,value) =>{

    let converted;
    switch (unit){
        case 'kg': converted=value*1; break;
        case 'pounds': converted = value*0.453592;break;
        default: break;
    }

    return converted;
}

//Calories Burned Formula
//Total calories burned = (Time(mins) * MET * 3.5 * Weight(kg))/200
// Refrence : Bushman B PhD. Complete Guide to Fitness and Health 2nd Edition.
// American College of Sports Medicine. Human Kinetics. 2017.
//* MET = Metabolic Equivalent of Task

const caloriesBurned = (item,type,quantity,state) => {
    console.log(item,type,quantity,state)
    let weight = convertTometric(state.userPersonalInfo.unitWeight,state.userPersonalInfo.weight);
    let itemIndex = -1; let MET = 0;
    activities[type].map((obj,index) => {if(obj.name === item) {itemIndex = index}});
    if(itemIndex > 0){MET = activities[type][itemIndex].MET;}
    console.log(itemIndex,MET)
    return Math.round((quantity * MET * 3.5 * weight)/200);
};

export default caloriesBurned;

