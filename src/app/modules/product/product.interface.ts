export interface TProduct {
  title: string;
  numberOfBooks: number;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  authorName: string;
  authorEmail: string;
  authorImageUrl: string;
  isAvailable: boolean;
  isDeleted?: boolean;
}
