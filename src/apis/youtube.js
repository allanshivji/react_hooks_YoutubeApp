import axios from 'axios';

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: process.env.REACT_APP_YOUTUBE_API_KEY
  };

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});