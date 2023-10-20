import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FeedbackService } from './service';

const createFeedback: RequestHandler = catchAsync(async (req, res) => {
  const feedbackData = req.body;
  const authUserId = req.user?._id;
  const result = await FeedbackService.createFeedback(authUserId, feedbackData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback created successfully',
    data: result,
  });
});

const getFeedbacks: RequestHandler = catchAsync(async (req, res) => {
  const result = await FeedbackService.getFeedbacks();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedbacks data fetched successfully',
    data: result,
  });
});

export const FeedbackController = {
  createFeedback,
  getFeedbacks,
};
