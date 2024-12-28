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
const addBulkProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseData = yield Product.insertMany(req.body);
        res.status(201).json({ status: "success", data: responseData });
        return;
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error.message);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
});
export default addBulkProductController;
