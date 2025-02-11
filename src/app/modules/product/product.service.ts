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

// update book service
const updateBook = async (id: string, payload: Partial<TProduct>) => {
  if (!id) {
    throw new Error('Book ID is required.');
  }

  if (!payload || Object.keys(payload).length === 0) {
    throw new Error('Update payload is missing.');
  }

  // Update the book in the database
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true, // Returns the updated document
    runValidators: true, // Ensures validation rules are applied
  });

  if (!result) {
    throw new Error('Book not found or update failed.');
  }

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
