import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidate } from './auth.validate';
import { AuthController } from './auth.controller';
const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidate.loginValidateSchema),
  AuthController.loginUser,
);
router.post(
  '/register',
  validateRequest(AuthValidate.RegisterValidateSchema),
  AuthController.createRegisterUser,
);
router.post('/admin/block-user', AuthController.deActivateAccount);
router.post('/admin/active-user', AuthController.activateAccount);
router.get('/admin/all-user', AuthController.AllUsers);
router.post('/admin/change-user-role', AuthController.changeRole);

export const AuthRoutes = router;
