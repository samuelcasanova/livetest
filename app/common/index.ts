import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../errors/base.error';
import { HttpStatusCode } from '../errors/codes';

type ExpressMethod<T> = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<T>;

export const catchAsync = <T>(fn: ExpressMethod<T>) => {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    return fn(req, res, next)
      .then((data) => {
        return res.status(200).json(
          data
        );
      })
      .catch((error) => {
        if (axios.isAxiosError(error) && error?.response?.data) {
          const { data } = error.response;
          return res.status(data.status).json(data);
        } else if (error instanceof BaseError) {
          return res.status(error.httpCode).json({
            message: error.message
          });
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER).json({
          message:
            'Server Error!',
          error: error.message
        });
      });
  };
};

