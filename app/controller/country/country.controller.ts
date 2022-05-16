import { Request, Response } from 'express';
import { catchAsync } from '../../common';
import CountryClient from '../../services/country';
import { GetCountryResponse } from '../../interface/countries';

class GetController {
  getData
   = catchAsync<GetCountryResponse>(async (req: Request, res:Response) => {
     
    let filter = req.query.filter as string;
    let order =  req.query.order as string;

    let data = await CountryClient.getCountries(filter, order);
    return data;
    
  });
}
export default new GetController();
