import { Router } from 'express';

const router = Router();

const routes = [
  {
    path: '/auth',
    route: ,
  },
  {
    path: '/product',
    route: ,
  },
 
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;