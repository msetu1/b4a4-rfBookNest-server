import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();

// This is product roues
router.post('/create-product', ProductController.createBook);
router.get('/:id', ProductController.singleBook);
router.patch('/delete-book', ProductController.updateBook);
router.delete('/update-book', ProductController.deleteBook);
router.get('/', ProductController.allBooks);

export const productRoutes = router;
