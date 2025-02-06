export interface TProduct {
  title: string;
  numberOfBooks: number;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  rating: number;
  bookDiscount: number;
  authorName: string;
  authorEmail: string;
  authorImageUrl: string;
  isAvailable: boolean;
  isDeleted?: boolean;
}
