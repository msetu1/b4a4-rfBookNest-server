import httpStatusCodes from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

// create book controller
const createBook = catchAsync(async (req, res) => {
  const result = await ProductServices.createBook(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Book Data Created Successfully',
    data: result,
  });
});

// all books controller
const allBooks = catchAsync(async (req, res) => {
  const result = await ProductServices.allBooks();
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Books Data retrieved successfully',
    data: result,
  });
});

// single book
const singleBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.singleBook(id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Single book data retrieved successfully',
    data: result,
  });
});

const deleteBook = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteBook(req.body.id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Book Data deleted successfully',
    data: result,
  });
});
const updateBook = catchAsync(async (req, res) => {
  const result = await ProductServices.updateBook(
    req.body.BookId,
    req.body.bookInfo,
  );
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Book Data updated successfully',
    data: result,
  });
});

export const ProductController = {
  createBook,
  allBooks,
  singleBook,
  updateBook,
  deleteBook,
};
