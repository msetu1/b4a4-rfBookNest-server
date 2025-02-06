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

// update book
const updateBook = async (id: string, payload: Partial<TProduct>) => {
  if (!payload) {
    throw new Error('Update payload is missing.');
  }

  // Prepare the updated data
  const modifiedUpdatedData: Record<string, unknown> = { ...payload };

  // Update the book (assuming MongoDB example, modify as needed)
  const result = await Product.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
  });

  return result;
};

// deleted book
const deleteBook = async (id: string) => {
  const result = await Product.findByIdAndDelete(id, { isDeleted: true });
  return result;
};

export const ProductServices = {
  createBook,
  allBooks,
  singleBook,
  updateBook,
  deleteBook,
};
