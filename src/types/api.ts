export type ParamsType = {
  params?: object;
};

export interface FetcherBase<T extends unknown | string = string>
  extends ParamsType {
  baseURL?: T;
  endpoint: string;
  config?: RequestInit;
}
