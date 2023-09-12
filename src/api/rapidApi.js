import axios from "axios";
import { BASEURL, APIKEY, HOST } from "../constants/rapidApi";

const getContent = async (genre) => {
  const res = await axios.get(BASEURL + `/${genre}`, {
    headers: {
      "X-RapidAPI-Key": APIKEY,
      "X-RapidAPI-Host": HOST,
    },
  });

  //   return details.data;
  console.log(res);
};

export default getContent;
