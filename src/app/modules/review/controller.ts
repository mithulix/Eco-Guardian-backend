import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ReviewService } from './service';

const createReview: RequestHandler = catchAsync(async (req, res) => {
  const reviewData = req.body;
  const authUserId = req.user?._id;
  const result = await ReviewService.createReview(authUserId, reviewData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review created successfully',
    data: result,
  });
});

const getReviews: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewService.getReviews();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews data fetched successfully',
    data: result,
  });
});

const getReviewsByServiceId: RequestHandler = catchAsync(async (req, res) => {
  const serviceId = req.params.serviceId
  const result = await ReviewService.getReviewsByServiceId(serviceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews data fetched successfully',
    data: result,
  });
});

const getReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ReviewService.getReview(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review data fetched successfully',
    data: result,
  });
});

const updateReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const reviewData = req.body;
  const result = await ReviewService.updateReview(id, reviewData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully',
    data: result,
  });
});

const deleteReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ReviewService.deleteReview(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

export const ReviewController = {
  createReview,
  getReview,
  getReviews,
  getReviewsByServiceId,
  updateReview,
  deleteReview,
};