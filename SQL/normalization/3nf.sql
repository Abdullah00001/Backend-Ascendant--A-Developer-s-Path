-- 2NF Implementation

  -- Requirements

    -- [1] It Must Be In 2NF
    -- [2] It must not have transitive dependencies
        -- A transitive dependency occurs when a non-key attribute depends on another non-key attribute,rather than depending on the primary key.

CREATE TABLE Users(
    id INT PRIMARY KEY
    name VARCHAR(200)
    email VARCHAR(800) UNIQUE
    address VARCHAR(1500)
)

CREATE TABLE books (
    isbn INT PRIMARY KEY
    bookName VARCHAR(500)
    bookDescription VARCHAR(1000)
    bookPrice INT
);

CREATE TABLE orders (
    orderId INT PRIMARY KEY
    orderDate DATE
    userId INT
    FOREIGN KEY (userId) REFERENCES Users(id)
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