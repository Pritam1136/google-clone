import axios from "axios";
import { Keys, cx } from "../../Keys";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: Keys,
  cx: cx,
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
