import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatusCodes from 'http-status-codes';
import AppError from '../../errors/AppError';
import { OrderService } from './order.service';

const handlePaymentSuccess = catchAsync(async (req, res): Promise<void> => {
  const { transactionId, product, userInfo } = req.body;

  // console.log('transactionId', transactionId);
  // console.log('product', product);
  // console.log('userInfo', userInfo);

  if (!transactionId || !product || !userInfo) {
    throw new AppError(httpStatusCodes.BAD_REQUEST, 'Missing required fields');
  }

  const orderData = {
    transactionId,
    product,
    userInfo,
    paidStatus: true,
    orderStatus: 'confirmed',
  };

  const result = await OrderService.createOrder(orderData);

  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Payment Successfully',
    data: result,
  });

  return;
});

const adminOrderData = catchAsync(async (req, res) => {
  const result = await OrderService.adminOrderData(req.body.email);
  // console.log('admin email',req.body.email)
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Order Data retrieved successfully',
    data: result,
  });
});

const userOrderData = catchAsync(async (req, res) => {
  const result = await OrderService.userOrderData(req.body.email);
  // console.log('user email',req.body.email)
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Order Data retrieved successfully',
    data: result,
  });
});

const acceptOrder = catchAsync(async (req, res) => {
  const result = await OrderService.acceptOrder(req.body.id);

  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Order accepted successfully',
    data: result,
  });
});

const cancelOrder = catchAsync(async (req, res) => {
  const result = await OrderService.cancelOrder(req.body.id);

  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Order canceled successfully',
    data: result,
  });
});

const removeOrder = catchAsync(async (req, res) => {
  const result = await OrderService.deleteOrder(req.body.id);

  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Order deleted successfully',
    data: result,
  });
});

export const OrderController = {
  handlePaymentSuccess,
  adminOrderData,
  userOrderData,
  acceptOrder,
  cancelOrder,
  removeOrder,
};
