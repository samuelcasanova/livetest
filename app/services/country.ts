import { AxiosResponse } from 'axios';
require('dotenv').config();
import {
  GetCountryResponse,
  ReverseParams,
  IGetResponse,
} from '../interface/countries';
import { httpClient } from './httpsClient';
import { BaseError } from '../errors/base.error';
import { HttpStatusCode } from '../errors/codes';

class CountryClient {

  getCountries = async (filter: string, order: string): Promise<GetCountryResponse> => {
    const resp: AxiosResponse<IGetResponse<GetCountryResponse>> = await httpClient.get("/")
    if (!!!resp) {
      throw new BaseError(
        HttpStatusCode.BAD_REQUEST,
        'Bad request'
      );
    }
    else {

      if ((typeof (filter) === "string") && filter.length > 0) {
        var filteredArr: any;
        filteredArr = [];
        resp.data.filter((items: GetCountryResponse, index: number) => {
          (items?.country.includes(filter) || items?.code.includes(filter) ) ? filteredArr.push(items) : null;
        });

        if (order === 'asc' || order === 'desc') {
          switch (order) {
            case 'asc':
              return filteredArr.sort((first: { vat: number }, second: { vat: number }) =>
                first.vat - second.vat
              );
            case 'desc':
              return filteredArr.sort((first: { vat: number }, second: { vat: number }) =>
                first.vat > second.vat ? -1 : 1
              );
            default:
              return filteredArr;
          }
        } else { 
          return filteredArr;
        }
      } else {
        return resp.data;
      }
    }
  };

  reverseParams = async (urlParams: string): Promise<ReverseParams> => {
    let responses: any;
    responses = ""
    if (typeof (urlParams) === "string") {
      let vowelArray = ["A", "E", "I", "O", "U"]
      let reverseURL = urlParams.split("").reverse().join("");

      let reservedVowelURL: any;
      reservedVowelURL = "";
      reverseURL.split("").forEach(element => {
        vowelArray.includes(element.toUpperCase()) ? element = element.toUpperCase() : element;
        reservedVowelURL += element
      });
      return reservedVowelURL

    }
    return responses;
  };

  appendRouteParams = async (start: string, end:string): Promise<string[]> => {
    let SIMPLE_ARRAY = process.env['SIMPLE_ARRAY'];
    if(!start && !end) return ["query params of start and/or end is required"]
    
    let responses: any;
    responses = [];
    if ((typeof(start) === "string" && start.length > 0) && (typeof(end) === "string" && end.length > 0)) {
      responses.push(start);
      responses.push(SIMPLE_ARRAY);
      responses.push(end);
      return responses;
    }
    if ((typeof(start) === "string") && start.length > 0) {
      responses.push(start);
      responses.push(SIMPLE_ARRAY);
    }
    if((typeof(end) === "string" && end.length > 0)){
      responses.push(SIMPLE_ARRAY)
      responses.push(end)
    }
    return responses;
  };

}
export default new CountryClient();