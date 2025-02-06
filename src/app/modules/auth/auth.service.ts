import jwt from 'jsonwebtoken';
import config from '../../config';
import httpStatusCodes from 'http-status-codes';
import { UserRegister } from './auth.model';
import { createToken, loginUserEmail } from './auth.utils';
import AppError from '../../errors/AppError';
import { TLoginUser, TRegisterUser } from './auth.interface';

// login user
const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await UserRegister.isUserExistsEmail(payload?.email);
  if (!user) {
    throw new AppError(httpStatusCodes.NOT_FOUND, 'This user is not found !');
  }

  // checking if the user is blocked
  const userStatus = user?.isBlocked;
  if (userStatus === true) {
    throw new AppError(httpStatusCodes.FORBIDDEN, 'This user is deactivated !');
  }

  // checking if the password is correct
  if (
    !(await UserRegister.isPasswordMatched(payload?.password, user?.password))
  )
    throw new AppError(httpStatusCodes.FORBIDDEN, 'Password do not matched');

  //create token and sent to the  client
  const jwtPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
    imageUrl: user.imageUrl,
  };

  // access token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires as string,
  );

  const decoded = jwt.decode(accessToken) as { email: string };
  const accessTokenF = decoded?.email;

  loginUserEmail(accessTokenF);

  return {
    accessToken,
    email: payload.email,
  };
};

// register user
const registerUser = async (payload: TRegisterUser) => {
  const result = await UserRegister.create(payload);
  return result;
};

// all user service
const allUser = async () => {
  const result = await UserRegister.find();
  return result;
};

// deActive account
const deActiveAccount = async (id: string) => {
  const result = await UserRegister.findByIdAndUpdate(id, { isBlocked: true });
  return result;
};

// active account
const activeAccount = async (id: string) => {
  const result = await UserRegister.findByIdAndUpdate(id, { isBlocked: false });
  return result;
};

// change role
const changeRole = async (userInfo: { role: string; email: string }) => {
  const result = await UserRegister.findOneAndUpdate(
    { email: userInfo.email },
    { role: userInfo.role },
  );
  return result;
};

// export
export const AuthServices = {
  loginUser,
  registerUser,
  allUser,
  activeAccount,
  deActiveAccount,
  changeRole,
};
