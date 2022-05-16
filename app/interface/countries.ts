import { ParsedUrlQuery } from "querystring";

export interface  IGetResponse<T> extends GetCountryResponse {
  status: number;
  msg: string;
  data: T;
}
export interface GetCountryResponse {
  country: string,
  code: string,
  vat: number,
  filter?: any
  push?: any
  sort?: any
}
export interface ReverseParams {
  response: string,
}

export interface IAppendParams {
  
    data: string[]
  
}
export interface IQuery {
  filter: ParsedUrlQuery 
  order:  ParsedUrlQuery 
}