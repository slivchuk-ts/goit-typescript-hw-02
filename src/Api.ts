import axios from "axios";
import { Image } from './types';


const API_KEY = 'A7_SPyf2cUQafSsqiqOKRsuJ_n7jkyCpUMMkUqjIT7g';
const BASE_URL = "https://api.unsplash.com/search/photos";

interface FetchImagesResponse {
  results: Image[];
}


export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 9
): Promise<FetchImagesResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: API_KEY,
    },
  });
  return response.data;
};