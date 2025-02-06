import httpStatusCodes from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
import catchAsync from '../../utils/catchAsync';

// create register user
const createRegisterUser = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUser(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Registration successfully',
    data: result,
  });
});

// login user
const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Logged in successfully!',
    data: {
      accessToken,
    },
  });
});

// all users
const AllUsers = catchAsync(async (req, res) => {
  const result = await AuthServices.allUser();
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'User information retrieved successfully',
    data: result,
  });
});

//  deActivate Account
const deActivateAccount = catchAsync(async (req, res) => {
  const result = await AuthServices.deActiveAccount(req.body.id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Account Deactivate successfully',
    data: result,
  });
});

// Activate Account
const activateAccount = catchAsync(async (req, res) => {
  const result = await AuthServices.activeAccount(req.body.id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Account Activate successfully',
    data: result,
  });
});

// change role
const changeRole = catchAsync(async (req, res) => {
  const result = await AuthServices.changeRole(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Role Changed successfully',
    data: result,
  });
});

export const AuthController = {
  createRegisterUser,
  loginUser,
  AllUsers,
  activateAccount,
  deActivateAccount,
  changeRole,
};
