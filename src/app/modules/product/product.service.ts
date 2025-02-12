import { TProduct } from './product.interface';
import { Product } from './product.model';

// create book
const createBook = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// all books
const allBooks = async () => {
  const result = await Product.find({ isDeleted: false });
  return result;
};

// Single Book
const singleBook = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const deleteBook = async (id: string) => {
  const result = await Product.findByIdAndUpdate(id, { isDeleted: true });
  return result;
};
const updateBook = async (id: string, bookInfo: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, { ...bookInfo});
  return result;
};

export const ProductServices = {
  createBook,
  allBooks,
  singleBook,
  updateBook,
  deleteBook,
};
