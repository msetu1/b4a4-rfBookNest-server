import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { productRoutes } from '../modules/product/product.route';

const router = Router();

const routes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/product',
    route: productRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
