/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import config from '../config';
import AppError from '../errors/AppError';
import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatusCodes from 'http-status-codes';
import { TUserRole } from '../modules/auth/auth.interface';
import { UserRegister } from '../modules/auth/auth.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // checking if the token is missing
    if (!token) {
      throw new AppError(
        httpStatusCodes.UNAUTHORIZED,
        'You are not authorized!',
      );
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { email } = decoded;
    const user = await UserRegister.isUserExistsEmail(email);

    if (!user) {
      throw new AppError(httpStatusCodes.NOT_FOUND, 'This user is not found!');
    }

    // checking if the user is blocked
    if (user?.isBlocked) {
      throw new AppError(
        httpStatusCodes.FORBIDDEN,
        'This user is dectivated !',
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
