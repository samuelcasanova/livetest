import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../common';
import CountryClient from '../../services/country';

class AppendRouteController {
  appendRouteParams
   = catchAsync<string[]>(async (req: Request, res:Response) => {
     
    let start = req.query.start as string;
    let end = req.query.end as string;
    let data = await CountryClient.appendRouteParams(start, end);
    return data;
  });
}
export default new AppendRouteController();
