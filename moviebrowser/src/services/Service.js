import axios from "axios";
import { API_KEY, UPCOMING_MOVIE_URL } from "../constants/constant";

export let GetMovieList = async () => {
  let page = 1;
  let data = [];
  while (page <= 10) {
    let getData = await axios.get(UPCOMING_MOVIE_URL, {
      params: {
        api_key: API_KEY,
        page: page,
        sort_by: "release_date.desc",
      },
    });
    if (getData?.status === 200) {
      data.push(getData.data);
    }
    page++;
  }
  return data;
};
