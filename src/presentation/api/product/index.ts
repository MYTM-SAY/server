import express from 'express';
import ProductController from './productController';
import ProductRepository from '../../../infrastructure/prisma/prismaRepositories/PrismaProductRepository';
import ProductService from '../../../application/ProductService';
import { isAuthenticated } from '../../middleware/authMiddleware';

const router = express.Router();
const productRepository = new ProductRepository();
const productUsecase = new ProductService(productRepository);
const productController = new ProductController(productUsecase); 


router.get('/', isAuthenticated, productController.getProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
