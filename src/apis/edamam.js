import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.edamam.com',
  params: {
    app_id: "11d90389",
    app_key: "b6862d92194b7d072c3230c20a3dbed1",
  },
});