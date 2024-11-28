import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

type Params = {
  baseURL: string;
};

export class HttpService {
  private readonly axios: AxiosInstance;

  constructor({ baseURL }: Params) {
    this.axios = axios.create({
      baseURL,
    });
  }

  get<T = Record<string, unknown>>(url: string, config?: AxiosRequestConfig) {
    return this.axios.get<T>(url, config);
  }

  post<T = Record<string, unknown>>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ) {
    return this.axios.post<T>(url, data, config);
  }
}
