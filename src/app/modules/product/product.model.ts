import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

// tis is my product model
const productSchema = new Schema<TProduct>({
  title: { type: String, required: true },
  numberOfBooks: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, required: true },
  bookDiscount: { type: Number, required: true },
  authorName: { type: String, required: true },
  authorEmail: { type: String, required: true },
  authorImageUrl: { type: String, required: true },
  isAvailable: { type: Boolean, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const Product = model<TProduct>('Product', productSchema);
