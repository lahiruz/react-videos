import axios from 'axios';

const API_KEY = 'AIzaSyDGDwWnF2O-GrOs5Ta71S2zEDMtVGe1SBQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});
