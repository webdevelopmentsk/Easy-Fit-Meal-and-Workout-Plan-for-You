import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.edamam.com/food-database/v2/parser',
  params: {
    app_id: "0eef7209",
    app_key: "7c3791ef5bad0542a2e6bec8f4934f45",
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});