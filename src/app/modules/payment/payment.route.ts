import express from 'express';
import { paymentController } from './payment.controller';

const router = express.Router();

router.post('/success/:tranId', paymentController.paymentSuccess);
router.post('/failed/:tranId', paymentController.paymentFailed);
router.put('/get-admin-order-data', paymentController.adminOrderData);
router.put('/get-user-order-data', paymentController.userOrderData);
router.put('/accept-order', paymentController.acceptOrder);
router.put('/cancel-order', paymentController.cancelOrder);
router.put('/delete-order', paymentController.DeleteOrder);
export const paymentRoutes = router;
