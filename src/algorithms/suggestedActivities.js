import { activities } from '../data/activities';

const suggestedActivities = (type,value) => {
    console.log(type,value)

    const items = activities.map(item =>
        {
            if(item.types.includes(type)) {return item.name}
        });
    
    const regex = new RegExp(`${value}`,'i');
    let suggestions = items.sort().filter(v => regex.test(v));

    return suggestions;
};

export default suggestedActivities;