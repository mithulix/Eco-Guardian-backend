import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { userSearchAndFilter } from './constant';
import { UserService } from './service';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await UserService.createUser(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getUsers: RequestHandler = catchAsync(async (req, res) => {
  const paginationOPtions = pick(req.query, paginationFields);
  const filtersOPtions = pick(req.query, userSearchAndFilter);
  const result = await UserService.getUsers(paginationOPtions, filtersOPtions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await UserService.getUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data fetched successfully',
    data: result,
  });
});

const updateUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const userData = req.body;
  const result = await UserService.updateUser(id, userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await UserService.deleteUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
