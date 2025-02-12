import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { paymentService } from './payment.service';

const paymentSuccess = catchAsync(async (req, res) => {
  const tranId = req.params.tranId;
  // console.log('Transaction ID:', tranId);
  await paymentService.paymentSuccessful(tranId);

  res.redirect(`http://localhost:8000/payment-successful/${req.params.tranId}`);
});
const paymentFailed = catchAsync(async (req, res) => {
  res.redirect(`http://localhost:8000/payment-failed/${req.params.tranId}`);
});

const adminOrderData = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await paymentService.adminOrderData(req.body.email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order Data retrieved successfully',
    data: result,
  });
});
const userOrderData = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await paymentService.userOrderData(req.body.email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order Data retrieved successfully',
    data: result,
  });
});

const acceptOrder = catchAsync(async (req, res) => {
  // console.log(req.body.id);
  // console.log(req.body);
  const result = await paymentService.acceptOrder(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order accepted successfully',
    data: result,
  });
});
const cancelOrder = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await paymentService.cancelOrder(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order canceled successfully',
    data: result,
  });
});
const DeleteOrder = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await paymentService.deleteOrder(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order deleted successfully',
    data: result,
  });
});

export const paymentController = {
  paymentSuccess,
  paymentFailed,
  adminOrderData,
  userOrderData,
  acceptOrder,
  cancelOrder,
  DeleteOrder,
};
