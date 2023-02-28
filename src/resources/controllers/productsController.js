import Products from "../models/products.js";
import mongoose from "mongoose";

class ProductController {
  // Phương thức
    async getAllProducts(req, res, next) {
        try {
            const products = await Products.find({})
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({
                error: error.message,
            })
        }
    }

    async getProductById(req, res, next) {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ //Check định dạng của ID nhận vào
            error: "Invalid id"
        });

        const product = await Products.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({
                error: "Product not found",
            });
        }
    }

  async create(req, res) {
    const { name, type, color, price } = req.body;

    try {
      const product = await Products.create({ name, type, color, price });
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }

  async update(req, res) {
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ //Check định dạng của ID nhận vào
        error: "Invalid id"
    });
    try {
        await Products.updateOne({_id: id}, req.body);
        res.status(200).json({
            message: "Product updated",
        })
    } catch (error) {
        res.status(400).json({
            error: error.message,
        })
    }

    }

    async delete(req, res) {
        const { id } = req.params; 
    
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ //Check định dạng của ID nhận vào
            error: "Invalid id"
        });
        try {
            await Products.deleteOne({_id: id}, req.body);
            res.status(200).json({
                message: "Product deleted",
            })
        } catch (error) {
            res.status(400).json({
                error: error.message,
            })
        }
    
        }
}

export default new ProductController();