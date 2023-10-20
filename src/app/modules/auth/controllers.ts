import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { AuthService } from './service';

const signUp: RequestHandler = catchAsync(async (req, res) => {
  const signUpData = req.body;
  const result = await AuthService.signUp(signUpData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sign Up successful',
    data: result,
  });
});

const signIn: RequestHandler = catchAsync(async (req, res) => {
  const signInData = req.body;
  const result = await AuthService.signIn(signInData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sign In successful',
    data: result,
  });
});

export const AuthController = { signUp, signIn };
