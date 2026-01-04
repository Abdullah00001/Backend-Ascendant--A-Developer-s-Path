# Database Normalization (1NF → 3NF)

This directory contains practical SQL examples demonstrating **database normalization**
from **First Normal Form (1NF)** to **Third Normal Form (3NF)**.

The goal of normalization is to:

- Reduce data redundancy
- Eliminate update, insert, and delete anomalies
- Ensure data integrity
- Design scalable and maintainable relational schemas

Each `.sql` file represents one normalization step with clear intent and structure.

---

## 📁 Directory Structure

```
│
├── 1nf.sql # First Normal Form example
├── 2nf.sql # Second Normal Form example
└── 3nf.sql # Third Normal Form example
```

---

## 🔹 First Normal Form (1NF)

**File:** `1nf.sql`

### Rules of 1NF

A table is in **First Normal Form** if:

1. Each column contains **atomic (indivisible) values**
2. Each column contains values of the **same data type**
3. Each row is **uniquely identifiable** (primary key)
4. There are **no repeating groups or multi-valued columns**

### What is demonstrated

- User data is stored in a `Users` table
- Multi-valued attributes (password history, phone numbers) are separated into their own tables
- Relationships are maintained using foreign keys

### Tables

- `Users`
- `CurrentPasswords`
- `OldPasswords`
- `PhoneNumbers`

This structure removes repeating columns and ensures atomicity.

---

## 🔹 Second Normal Form (2NF)

**File:** `2nf.sql`

### Rules of 2NF

A table is in **Second Normal Form** if:

1. It is already in **1NF**
2. All **non-key attributes** are fully dependent on the **entire primary key**
3. There are **no partial dependencies**

> Partial dependency occurs when a non-key column depends on only part of a composite primary key.

### What is demonstrated

- `order_items` uses a **composite primary key** `(isbn, orderId)`
- Attributes like `quantity` and `totalPrice` depend on **both** `isbn` and `orderId`
- Book and order details are moved into separate tables

### Tables

- `books`
- `orders`
- `order_items`

This design avoids partial dependency and keeps relationships normalized.

---

## 🔹 Third Normal Form (3NF)

**File:** `3nf.sql`

### Rules of 3NF

A table is in **Third Normal Form** if:

1. It is already in **2NF**
2. There are **no transitive dependencies**

> A transitive dependency occurs when a non-key attribute depends on another non-key attribute
> instead of directly depending on the primary key.

### What is demonstrated

- Customer-related data is stored only in the `Users` table
- `orders` references users using `userId`
- No non-key attribute depends on another non-key attribute

### Tables

- `Users`
- `books`
- `orders`
- `order_items`

This structure ensures:

- Clear separation of concerns
- No redundant customer data inside orders
- Fully normalized schema up to 3NF

---

## ✅ Key Takeaways

- **1NF** focuses on atomic values and removing repeating groups
- **2NF** eliminates partial dependency on composite keys
- **3NF** removes transitive dependencies between non-key attributes

Together, these steps lead to a **clean, scalable, and maintainable relational database design**.

---

## 📌 Notes

- These examples are designed for **learning and conceptual clarity**
- Syntax may be adapted depending on the database engine (PostgreSQL, MySQL, etc.)
- Further normalization (BCNF, 4NF) can be applied based on advanced requirements

---

## 👤 Author

Created as part of learning and practicing **database design and normalization concepts**.
