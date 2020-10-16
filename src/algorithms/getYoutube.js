import youtube from '../apis/youtube';
require('dotenv').config();


const getYoutube = async () => {

    var myKey = process.env.YOUTUBE_KEY;

    console.log(myKey)

    const response = await youtube.get('/search', {
        params:{
            q: 'Relaxing Stretching Workout for Stiff Muscles & Stress Relief',
            part: 'snippet',
            maxResults: 4,
            type: 'video',
            key: ''
        },
    });
    console.log(response.data.items)
};

export default getYoutube;