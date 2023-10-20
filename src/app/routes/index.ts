import express from 'express';
import { AuthRoutes } from '../modules/auth/routes';
import { UserRoutes } from '../modules/user/routes';
import { CategoryRoutes } from '../modules/category/routes';
import { CleaningServiceRoutes } from '../modules/cleaningServices/routes';
import { BookingRoutes } from '../modules/booking/routes';
import { ReviewRoutes } from '../modules/review/routes';
import { ProfileRoutes } from '../modules/profile/routes';
import { FeedbackRoutes } from '../modules/feedback/routes';
import { CartRoutes } from '../modules/cart/routes';
import { ContentManagementRoutes } from '../modules/contentManagement/routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/categories',
    routes: CategoryRoutes,
  },
  {
    path: '/cleaning-service',
    routes: CleaningServiceRoutes,
  },
  {
    path: '/booking',
    routes: BookingRoutes,
  },
  {
    path: '/reviews',
    routes: ReviewRoutes,
  },
  {
    path: '/profile',
    routes: ProfileRoutes,
  },
  {
    path: '/feedbacks',
    routes: FeedbackRoutes,
  },
  {
    path: '/carts',
    routes: CartRoutes,
  },
  {
    path: '/content-management',
    routes: ContentManagementRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;
