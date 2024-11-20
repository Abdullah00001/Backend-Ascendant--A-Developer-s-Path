"use strict";
/* =========================
-------TYPE ANOTTATIONS------
=========================== */
const Products = [];
const Orders = [];
const AddProduct = (ProductName, ProductPrice, Stocks) => {
    const ReqProduct = {
        ProductName,
        ProductPrice,
        Stocks,
        StockStatus: "In Stock" /* StockStatus.instock */,
        id: ProductPrice + Stocks + 9991,
    };
    Products.push(ReqProduct);
};
AddProduct('Redmi 9A', 8600, 8);
const PlaceOrder = (CustomerName, CustomerEmail, CustomerLocation, Quantity, product_id) => {
    const ReqOrder = {
        Name: CustomerName,
        Email: CustomerEmail,
        Location: CustomerLocation,
        Quantity,
        product_id,
        Order_ID: product_id + Quantity + 99991,
        Status: "Pending" /* OrderStatus.pending */,
    };
    Orders.push(ReqOrder);
};
PlaceOrder('Abdullah', 'example@example.com', 'Dhaka', 2, 4556789);
const GetAllOrders = () => {
    return Orders;
};
console.log(GetAllOrders());
const GetAllProducts = () => {
    return Products;
};
console.log(GetAllProducts());
