import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.edamam.com/auto-complete',
  params: {
    app_id: "754e1504",
    app_key: "14fd38052a8a201ea766065825d8e1c9",
  },
});