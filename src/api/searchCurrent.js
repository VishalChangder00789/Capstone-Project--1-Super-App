import axios from "axios";
import { baseURL, currentWeather, secretKey } from "../constants/constants";

const getWeather = async () => {
  const location = "India";
  const details = await axios.get(baseURL + currentWeather, {
    headers: {},
    params: {
      key: secretKey,
      q: location,
    },
  });

  return details.data;
};

export default getWeather;
