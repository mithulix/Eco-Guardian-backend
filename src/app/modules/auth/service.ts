import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ISignInPayload } from './interface';
import { User } from '../user/model';
import { AuthUtils } from './utils';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';
import { IUser } from '../user/interface';

const signUp = async (payload: IUser) => {
  payload.password = await AuthUtils.hashPass(payload.password);
  const user = await User.create(payload);
  const tokenPayload = { _id: user._id, role: user.role };
  const accessToken = jwtHelpers.generateToken(
    tokenPayload,
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return { ...user, accessToken };
};

const signIn = async (payload: ISignInPayload) => {
  const { email, password } = payload;
  const userExist = await User.findOne({ email }).lean();

  if (!userExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User account not found');
  }

  if (!(await AuthUtils.passMatched(password, userExist.password))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User credentials is wrong');
  }

  const tokenPayload = { _id: userExist._id, role: userExist.role };
  const accessToken = jwtHelpers.generateToken(
    tokenPayload,
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return { ...userExist, accessToken };
};

export const AuthService = { signUp, signIn };
