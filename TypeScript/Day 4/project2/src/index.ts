/* ==================================================
-----------PROJECT WITH TYPECRIPT BASIC TOPICS------
======================================================= */

// full usage of all basic types with simple static in e comerce project

/* ======================== 
------USAGE OF TOPICS------
-string type
-number type
-enum type
-interface 
-array
-function
-type annotations
========================== */

const enum OrderStatus {
  'pending' = 'Pending',
  'recieved' = 'Recieved',
  'confirmed' = 'Confirmed',
  'delivering' = 'Delivering',
}

const enum StockStatus {
  'instock' = 'In Stock',
  'stockout' = 'Stock Out',
}

interface Product {
  ProductName: string;
  ProductPrice: number;
  StockStatus: StockStatus;
  Stocks: number;
  id: number;
}

interface Order {
  Name: string;
  Email: string;
  Location: string;
  Quantity: number;
  Status: OrderStatus;
  Order_ID: number;
  product_id: number;
}
const Products: Product[] = [];
const Orders: Order[] = [];

const AddProduct = (
  ProductName: string,
  ProductPrice: number,
  Stocks: number
): void => {
  const ReqProduct: Product = {
    ProductName,
    ProductPrice,
    Stocks,
    StockStatus: StockStatus.instock,
    id: ProductPrice + Stocks + 9991,
  };
  Products.push(ReqProduct);
};

AddProduct('Redmi 9A', 8600, 8);

const PlaceOrder = (
  CustomerName: string,
  CustomerEmail: string,
  CustomerLocation: string,
  Quantity: number,
  product_id: number
): void => {
  const ReqOrder: Order = {
    Name: CustomerName,
    Email: CustomerEmail,
    Location: CustomerLocation,
    Quantity,
    product_id,
    Order_ID: product_id + Quantity + 99991,
    Status: OrderStatus.pending,
  };
  Orders.push(ReqOrder);
};

PlaceOrder('Abdullah', 'example@example.com', 'Dhaka', 2, 4556789);

const GetAllOrders = (): Order[] => {
  return Orders;
};

console.log(GetAllOrders());

const GetAllProducts = (): Product[] => {
  return Products;
};

console.log(GetAllProducts());
