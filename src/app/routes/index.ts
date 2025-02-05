import { Router } from 'express';

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
