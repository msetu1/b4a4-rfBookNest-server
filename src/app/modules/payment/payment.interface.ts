// Types
interface Product {
  _id: string;
  title: string;
  numberOfBooks: number;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  rating?: number;
  bookDiscount: number;
  authorName: string;
  authorEmail: string;
  isAvailable: boolean;
  isDeleted: boolean;
  __v: number;
}
interface UserInfo {
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export interface TOrder {
  product: Product;
  paidStatus: boolean;
  transactionId: string;
  orderStatus?: string;
  userInfo: UserInfo;
}
