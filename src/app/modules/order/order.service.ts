import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

const adminOrderData = async (email: string) => {
  return await Order.find({
    paidStatus: true,
    'product.authorEmail': email,
  });
};

const userOrderData = async (email: string) => {
  return await Order.find({
    paidStatus: true,
    'userInfo.email': email,
  });
};

const acceptOrder = async (id: string) => {
  const result = await Order.findByIdAndUpdate(id, {
    orderStatus: 'accepted',
  });
  return result;
};

const cancelOrder = async (id: string) => {
  const result = await Order.findByIdAndUpdate(id, {
    orderStatus: 'canceled',
  });
  return result;
};

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  createOrder,
  adminOrderData,
  userOrderData,
  acceptOrder,
  cancelOrder,
  deleteOrder,
};
