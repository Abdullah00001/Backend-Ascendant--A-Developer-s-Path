import { model, Schema } from "mongoose";
const ProductSchema = new Schema({
    productName: { type: String, required: true },
    productPice: { type: Number, required: true },
    ProductDetails: { type: String, required: true },
    inStock: { type: String, default: false },
    brand: { type: String, required: true },
    category: { type: String, required: true },
}, { timestamps: true });
const Product = model("Product", ProductSchema);
export default Product;
