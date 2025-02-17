// Order Types
interface Product {
  _id: string;
  title: string;
  numberOfBooks: number;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  authorName: string;
  authorEmail: string;
  rating?: number;
  bookDiscount: number;
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
