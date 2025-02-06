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
  const book = req.body?.book;

  // check data missing ki na
  if (!book) {
    res.status(400).json({
      success: false,
      message: 'Update payload is missing.',
    });
    return;
  }

  // the title is provided and update it
  const { title, ...otherFields } = book;

  const modifiedUpdatedData: Record<string, unknown> = { ...otherFields };

  if (title) {
    // If the title exists in the request, update it.
    modifiedUpdatedData['title'] = title;
  }

  // Call service to update book data
  const result = await ProductServices.updateBook(id, modifiedUpdatedData);

  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Book data updated successfully',
    data: result,
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
