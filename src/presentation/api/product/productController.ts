import { NextFunction, Request, Response } from 'express';
import ProductUseCase from '../../../application/ProductService';

class ProductController {
  constructor(private readonly productUseCase: ProductUseCase) {}

  createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const newProduct = await this.productUseCase.createProduct(product);
      res.status(201).json(newProduct);
    } catch (error: any) {
      next(error);
    }
  };

  getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = await this.productUseCase.getProductById(id);
      res.status(200).json(product);
    } catch (error: any) {
      next(error);
    }
  };

  updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = req.body;
      const updatedProduct = await this.productUseCase.updateProduct(
        id,
        product,
      );
      res.status(200).json(updatedProduct);
    } catch (error: any) {
      next(error);
    }
  };

  deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.productUseCase.deleteProduct(id);
      res.status(204).json();
    } catch (error: any) {
      next(error);
    }
  };

  /**
   * @swagger
   * /products:
   *   get:
   *     summary: Retrieve a list of products
   *     description: Fetches all available products from the system.
   *     responses:
   *       200:
   *         description: A list of products
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: integer
   *                     description: The unique identifier for the product
   *                   name:
   *                     type: string
   *                     description: The name of the product
   *                   price:
   *                     type: number
   *                     format: float
   *                     description: The price of the product
   *                   description:
   *                     type: string
   *                     description: A description of the product
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: The error message
   */
  getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productUseCase.getProducts();
      res.status(200).json(products);
    } catch (error: any) {
      next(error);
    }
  };
}
export default ProductController;
