import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  console.log(orderData);
  return result;
};

// const adminOrderData = async (email: string) => {
//   return await Order.find({
//     paidStatus: true,
//     'product.authorEmail': email,
//   });
// };

// const userOrderData = async (email: string) => {
//   return await Order.find({
//     paidStatus: true,
//     'userInfo.email': email,
//   });
// };

// const acceptOrder = async (transactionId: string) => {
//   const order = await Order.findOneAndUpdate(
//     { transactionId },
//     { orderStatus: 'accepted' },
//     { new: true },
//   );

//   if (!order) {
//     throw new Error('Order not found');
//   }

//   return order;
// };

// const cancelOrder = async (transactionId: string) => {
//   const order = await Order.findOneAndUpdate(
//     { transactionId },
//     { orderStatus: 'canceled' },
//     { new: true },
//   );

//   if (!order) {
//     throw new Error('Order not found');
//   }

//   return order;
// };

// const deleteOrder = async (transactionId: string) => {
//   const order = await Order.findOneAndDelete({ transactionId });

//   if (!order) {
//     throw new Error('Order not found');
//   }

//   return order;
// };

export const OrderService = {
  createOrder,
  // adminOrderData,
  // userOrderData,
  // acceptOrder,
  // cancelOrder,
  // deleteOrder,
};
