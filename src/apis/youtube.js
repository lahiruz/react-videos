import axios from 'axios';

const API_KEY = 'AIzaSyC1YMD5gQklLs0etfNRdW6IjAOTSetpKX4'; 

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});
