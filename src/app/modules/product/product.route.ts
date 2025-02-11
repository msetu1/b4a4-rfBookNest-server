import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();

// This is product roues
router.post('/create-product', ProductController.createBook);
router.get('/:id', ProductController.singleBook);
router.delete('/delete-book', ProductController.deleteBook);
router.patch('/update-book', ProductController.updateBook);
router.get('/', ProductController.allBooks);

export const productRoutes = router;
