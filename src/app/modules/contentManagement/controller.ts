import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ContentManagementService } from './service';
import pick from '../../../shared/pick';
import { contentSearchFilter } from './constant';

const createContentManagement: RequestHandler = catchAsync(async (req, res) => {
  const ContentManagementData = req.body;
  const result = await ContentManagementService.createContentManagement(
    ContentManagementData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content management created successfully',
    data: result,
  });
});

const getContentManagements: RequestHandler = catchAsync(async (req, res) => {
  const searchFilterOptions = pick(req.query, contentSearchFilter);
  console.log(searchFilterOptions)
  const result = await ContentManagementService.getContentManagements(
    searchFilterOptions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content management fetched successfully',
    data: result,
  });
});

const updateContentManagement: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const ContentManagementData = req.body;
  const result = await ContentManagementService.updateContentManagement(
    id,
    ContentManagementData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content management updated successfully',
    data: result,
  });
});

const deleteContentManagement: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ContentManagementService.deleteContentManagement(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content management deleted successfully',
    data: result,
  });
});

export const ContentManagementController = {
  createContentManagement,
  getContentManagements,
  updateContentManagement,
  deleteContentManagement,
};