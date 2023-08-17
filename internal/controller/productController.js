const ProductService = require('../service/productService');

class ProductController {
    static async getProducts(req, res) {
        try {
            const videoID = req.params.videoID;
            const products = await ProductService.getProducts(videoID);
            res.status(200).json(products);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static async addProduct(req, res) {
        try {
            const videoID = req.params.videoID;
            const { productUrl, thumbnailUrl, title, price } = req.body;
            const newProduct = await ProductService.addProduct(
                {
                    videoID: videoID,
                    productUrl: productUrl,
                    thumbnailUrl: thumbnailUrl,
                    title: title,
                    price: price
                }
            );
            res.status(201).json(newProduct);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}

module.exports = ProductController;