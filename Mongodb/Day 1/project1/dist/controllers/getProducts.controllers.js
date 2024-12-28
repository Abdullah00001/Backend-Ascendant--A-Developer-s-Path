var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Product from "../models/product.model.js";
const getProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = req.query;
        const pageNum = parseInt(page) || 1;
        const limitNum = parseInt(limit) || 10;
        const totalDocuments = yield Product.countDocuments();
        const totalPage = Math.ceil(totalDocuments / limitNum);
        const skip = (pageNum - 1) * limitNum;
        const previousPage = page === null || pageNum === 1
            ? null
            : `http://localhost:5000/api/v1/products?page=${pageNum - 1}&limit=${limitNum}`;
        const nextPage = pageNum === totalPage
            ? null
            : `http://localhost:5000/api/v1/products?page=${pageNum + 1}&limit=${limitNum}`;
        const data = yield Product.aggregate([
            {
                $skip: skip,
            },
            {
                $limit: limitNum,
            },
            {
                $project: {
                    _id: 1,
                    productName: 1,
                    brand: 1,
                    category: 1,
                    inStock: 1,
                },
            },
        ]);
        res.status(200).json({
            status: "success",
            message: "Data retrieve successful",
            totalResult: totalDocuments,
            totalPages: totalPage,
            page: pageNum,
            pageResult: limitNum,
            previousPage: previousPage,
            nextPage: nextPage,
            data: data,
        });
        return;
    }
    catch (error) {
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
});
export default getProductsController;
