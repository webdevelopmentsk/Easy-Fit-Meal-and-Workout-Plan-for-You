import youtube from '../apis/youtube';

const getYoutube = async () => {

    const response = await youtube.get('/search', {
        params:{
            q: 'Relaxing Stretching Workout for Stiff Muscles & Stress Relief',
            part: 'snippet',
            maxResults: 4,
            type: 'video',
            key: 'AIzaSyAQWpXt2qLY4PNoAnnQfbm_qLkBbG57W00'
        },
    });
    console.log(response.data.items)
};

export default getYoutube;