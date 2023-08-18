import axios from "axios";
import {
  API_KEY,
  SEARCH_MOVIE_URL,
  UPCOMING_MOVIE_URL,
} from "../constants/constant";

export let getUpcomingMovieListApi = async () => {
  let page = 1;
  let data = [];
  while (page <= 2) {
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

export let searchMovieApi = async (data) => {
  let getData = await axios.get(SEARCH_MOVIE_URL, {
    params: {
      api_key: API_KEY,
      query: data,
    },
  });
  return getData.data;
};
