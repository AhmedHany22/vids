import Axios from "axios";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: process.env.REACT_APP_YOUTUBE_KEY,
  },
});
