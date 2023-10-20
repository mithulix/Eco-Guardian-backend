import { ObjectId } from 'mongoose';
import { IFeedback } from './interface';
import { Feedback } from './model';

const createFeedback = async (authUserId: ObjectId, payload: IFeedback) => {
  payload.user = authUserId;
  const feedback = await Feedback.create(payload);
  return feedback;
};

const getFeedbacks = async () => {
  const feedbacks = await Feedback.find();

  return feedbacks;
};

export const FeedbackService = {
  createFeedback,
  getFeedbacks,
};
