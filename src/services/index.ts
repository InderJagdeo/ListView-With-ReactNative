import axios, { AxiosResponse } from 'axios';
import { BASE_URL, jsonHeader, formDataHeader } from './serviceConfig';

const request = async <T, R>(
  method: string,
  endpoint: string,
  payload?: T
): Promise<R> => {
  try {
    const url = BASE_URL + endpoint;
    let headers: { [key: string]: string } = {};

    if (typeof payload === 'string' || typeof payload === 'object') {
      headers = jsonHeader;
    } else {
      headers = formDataHeader
    }

    const response: AxiosResponse<R> = await axios({
      method,
      url,
      headers,
      data: payload,
    });
    return response.data;
  } catch (error) {
    // Handle error here
    throw new Error('Request failed');
  }
};


export default request;
