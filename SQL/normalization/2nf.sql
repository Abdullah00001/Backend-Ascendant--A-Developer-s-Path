-- 2NF Implementation

  -- Requirements

    -- [1] It Must Be In 1NF
    -- [2] All non-key Attributes Must Be Fully Functionally Dependent On The Entire Primary Key
        -- no non-key column depend on only part of the primary key
        -- no partial dependencies on primary key


CREATE TABLE books (
    isbn INT PRIMARY KEY
    bookName VARCHAR(500)
    bookDescription VARCHAR(1000)
    bookPrice INT
);

CREATE TABLE orders (
    orderId INT PRIMARY KEY
    customerName VARCHAR(200)
    customerEmail VARCHAR(800)
    customerAddress VARCHAR(1500)
    orderDate DATE
)

CREATE TABLE order_items (
    isbn INT
    orderId INT
    quantity INT
    totalPrice INT
    PRIMARY KEY (isbn,orderId)
    FOREIGN KEY (orderId) REFERENCES orders(orderId)
    FOREIGN KEY (isbn) REFERENCES book(isbn)
)