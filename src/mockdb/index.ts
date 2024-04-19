import axios from "axios";

export const getHttp = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
