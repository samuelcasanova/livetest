import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../common';
import CountryClient from '../../services/country';
import { ReverseParams, } from '../../interface/countries';

class GetReverseController {
  reverseParams
   = catchAsync<ReverseParams>(async (req: Request, res:Response) => {
     
    let filter = req.params.id as string;
    let data = await CountryClient.reverseParams(filter);
    
    return data;
  });
}
export default new GetReverseController();
