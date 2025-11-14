import { Request, Response } from "express";
import Product from "../models/product.model.js";

const addBulkProductController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const responseData = await Product.insertMany(req.body);
    res.status(201).json({ status: "success", data: responseData });
    return;
  } catch (error) {
    if(error instanceof Error) console.log(error.message);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export default addBulkProductController;
