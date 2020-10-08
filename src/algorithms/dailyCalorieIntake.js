const convertTometric = (unit,value) =>{

    let converted;
    switch (unit){
        case 'kg': converted=value*1; break;
        case 'pounds': converted = value*0.453592;break;
        case 'cm': converted=value*1;break;
        case 'inches': converted = value*2.54;break;
        default: break;
    }

    return converted;
}

const dailyCalorieIntake = state => {


    let age = state.userPersonalInfo.age;
    let gender = state.userPersonalInfo.gender;
    let height = convertTometric(state.userPersonalInfo.unitHeight,state.userPersonalInfo.height);
    let weight = convertTometric(state.userPersonalInfo.unitWeight,state.userPersonalInfo.weight);
    let activity = state.userPersonalInfo.activity;
    let goalType = state.userGoal.goalType;
    let goalWeight = state.userGoal.goalWeight;
    let goalSpeed = state.userGoal.goalSpeed;

    let bmr;
    switch (gender){
        case 'male': bmr = 66.4730+(13.7516*weight)+(5.0033*height)-(6.7550*age);break;
        case 'female': bmr = 655.0955+(9.5634*weight)+(1.8496*height)-(4.6756*age);break;
        default: break;
    };

    let calMaintain;
    switch (activity){
        case 'Little to no exercise': calMaintain = bmr*1.2;break;
        case 'Light: exercise 1-3 times/week': calMaintain = bmr*1.375;break;
        case 'Moderate: exercise 4-5 times/week': calMaintain = bmr*1.55;break;
        case 'Active: Daily exercise or intense exercise 3-4 times/week': calMaintain = bmr*1.725;break;
        case 'Very Active: intense exercise 6-7 times/week': calMaintain = bmr*1.9;break;
        default: break;
    };

    //let deltaWeight = Math.abs(goalWeight-weight);

    if(goalType === 'maintain-weight') {
        let time = 0;
        return [Math.round(calMaintain),time];
    }
    else{
        let speed = 0.25*goalSpeed + 0.5;  // kgs/week
        let calToBurn = 7700*speed/7; // kcal/day
        let time = Math.round(Math.abs(goalWeight-weight)/speed);
        let dailyCalIntake;
        switch (goalType){

            case 'lose-weight': 
                dailyCalIntake = Math.round(calMaintain - calToBurn);break;
            case 'gain-weight': dailyCalIntake = Math.round(calMaintain + calToBurn);break;
            default: break;
        };
        return [Math.round(dailyCalIntake),time];
    };


};

export default dailyCalorieIntake;
