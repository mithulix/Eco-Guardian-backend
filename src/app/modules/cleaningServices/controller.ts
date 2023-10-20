import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { cleaningServiceSearchAndFilter } from './constant';
import { CleaningServeService } from './service';

const createCleaningService: RequestHandler = catchAsync(async (req, res) => {
  const cleaningServiceData = req.body;
  const result = await CleaningServeService.createCleaningService(
    cleaningServiceData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cleaning Service created successfully✅',
    data: result,
  });
});

const getCleaningServices: RequestHandler = catchAsync(async (req, res) => {
  const paginationOPtions = pick(req.query, paginationFields);
  const filtersOPtions = pick(req.query, cleaningServiceSearchAndFilter);
  const result = await CleaningServeService.getCleaningServices(
    paginationOPtions,
    filtersOPtions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cleaning Services data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getCleaningService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CleaningServeService.getCleaningService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cleaning Service data fetched successfully',
    data: result,
  });
});

const updateCleaningService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const cleaningServiceData = req.body;
  const result = await CleaningServeService.updateCleaningService(
    id,
    cleaningServiceData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cleaning Service updated successfully',
    data: result,
  });
});

const deleteCleaningService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CleaningServeService.deleteCleaningService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cleaning Service deleted successfully',
    data: result,
  });
});

export const CleaningServiceController = {
  createCleaningService,
  getCleaningService,
  getCleaningServices,
  updateCleaningService,
  deleteCleaningService,
};
