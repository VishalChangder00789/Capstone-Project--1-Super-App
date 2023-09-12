import axios from "axios";
import { baseURL, key } from "../constants/newsConstants";

const getNews = async () => {
  const locations = ["india", "usa", "australia"];
  const topic = locations[Math.floor(Math.random() * locations.length)];
  const details = await axios.get(baseURL, {
    params: {
      apiKey: key,
      q: topic,
      pageSize: 10,
    },
  });

  return details;
};

export default getNews;
