import { Product } from '../product/product.model';
import { Order } from './payment.model';

const paymentSuccessful = async (transactionId: string) => {
  const result = await Order.findOneAndUpdate(
    { transactionId: transactionId },
    { paidStatus: true },
    {
      new: true,
    },
  );
  // console.log(result.product);
  const findBook = await Product.findById({ _id: result?.product?._id });
  // console.log('Find Book =>', findBook);
  if (findBook) {
    const updateBookCount = findBook?.numberOfBooks - 1;
    // console.log(updateBookCount);

    await Product.findByIdAndUpdate(
      { _id: findBook?._id },
      { numberOfBooks: updateBookCount },
    );
  }

  return result;
};

const adminOrderData = async (email: string) => {
  // console.log(email);
  const result = await Order.find({
    paidStatus: true,
    'product.authorEmail': email,
  });
  return result;
};
const userOrderData = async (email: string) => {
  // console.log(email);
  const result = await Order.find({
    paidStatus: true,
    'userInfo.email': email,
  });
  return result;
};
const acceptOrder = async (id: string) => {
  // console.log(email);
  // console.log(id);

  const result = await Order.findByIdAndUpdate(id, {
    orderStatus: 'accepted',
  });
  return result;
};
const cancelOrder = async (id: string) => {
  // console.log(email);
  // console.log(id);
  const result = await Order.findByIdAndUpdate(id, {
    orderStatus: 'canceled',
  });
  return result;
};
const deleteOrder = async (id: string) => {
  // console.log(email);
  // console.log(id);
  const result = await Order.findByIdAndDelete(id);
  return result;
};
export const paymentService = {
  paymentSuccessful,
  adminOrderData,
  userOrderData,
  acceptOrder,
  cancelOrder,
  deleteOrder,
};
