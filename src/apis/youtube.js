import axios from 'axios';

const KEY = 'AIzaSyCZAJLvZIN68Zfiqk6_oU0K5SLEbioSoqM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY
  }
})