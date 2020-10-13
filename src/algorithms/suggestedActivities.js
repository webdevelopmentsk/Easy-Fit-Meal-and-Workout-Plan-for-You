import { activities } from '../data/activities';

const suggestedActivities = (type,value) => {

    const items = activities[type].map(item => item.name);
    const regex = new RegExp(`${value}`,'i');
    let suggestions = items.sort().filter(v => regex.test(v));

    return suggestions
};

export default suggestedActivities;