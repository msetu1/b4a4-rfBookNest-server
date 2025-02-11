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

// update book controller
const updateBook = catchAsync(async (req, res): Promise<void> => {
  const { id } = req.params;
  const bookUpdates = req.body?.book;

  if (!bookUpdates) {
    res.status(httpStatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Update payload is missing.',
    });
    return;
  }

  const updatedBook = await ProductServices.updateBook(id, bookUpdates);

  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Book updated successfully.',
    data: updatedBook,
  });
});

// delete book controller
const deleteBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ProductServices.deleteBook(id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Book Data deleted successfully',
    data: {},
  });
});

export const ProductController = {
  createBook,
  allBooks,
  singleBook,
  updateBook,
  deleteBook,
};
