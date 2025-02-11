export interface TProduct {
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
  isDeleted?: boolean;
}
