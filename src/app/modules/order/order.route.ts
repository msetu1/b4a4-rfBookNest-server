import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/success', OrderController.handlePaymentSuccess);
// router.put('/admin-order-data', OrderController.adminOrderData);
// router.put('/user-order-data', OrderController.userOrderData);
// router.put('/accept-order', OrderController.acceptOrder);
// router.put('/cancel-order', OrderController.cancelOrder);
// router.put('/delete-order', OrderController.removeOrder);
export const orderRoutes = router;
