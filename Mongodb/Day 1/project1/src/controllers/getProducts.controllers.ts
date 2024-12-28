import { Request, Response } from "express";
import Product from "../models/product.model.js";

const getProductsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { page, limit } = req.query;
    const pageNum = parseInt(page as string) || 1;
    const limitNum = parseInt(limit as string) || 10;
    const totalDocuments = await Product.countDocuments();
    const totalPage = Math.ceil(totalDocuments / limitNum);
    const skip = (pageNum - 1) * limitNum;
    const previousPage =
      page === null || pageNum === 1
        ? null
        : `http://localhost:5000/api/v1/products?page=${
            pageNum - 1
          }&limit=${limitNum}`;
    const nextPage =
      pageNum === totalPage
        ? null
        : `http://localhost:5000/api/v1/products?page=${
            pageNum + 1
          }&limit=${limitNum}`;
    const data = await Product.aggregate([
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
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export default getProductsController;
