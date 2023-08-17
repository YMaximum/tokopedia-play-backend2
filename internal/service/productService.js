const Products = require('../models/productModel');

class ProductService {
    static async getProducts(videoID) {
        return await Products.find({ videoID: videoID });
    }

    static async addProduct(productData) {
        try {
            const newProduct = new Products(productData);
            const savedProduct = await newProduct.save();
            return savedProduct;
        }
        catch (e) {
            console.log('Error:', e.message);
        }
    }
}

module.exports = ProductService;