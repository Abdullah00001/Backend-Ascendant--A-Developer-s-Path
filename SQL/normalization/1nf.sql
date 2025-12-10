-- 1NF Implementation

  -- Requirements

    -- [1] Each Column Contain Atomic (Indivisible) Values
    -- [2] Each Column Contain's Value's of The Same Type
    -- [3] Each Row Is Unique (Ensured By A Primary Key)
    -- [4] No Repeating Group Of Column's

CREATE TABLE Users (
    id INT,
    name VARCHAR(500),
    email VARCHAR(1500) UNIQUE,
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE CurrentPasswords(
    id INT,
    current_password VARCHAR(120),
    updated_at DATETIME,
    user_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE OldPasswords(
    id INT,
    old_password VARCHAR(120),
    updated_at DATETIME,
    user_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE PhoneNumbers (
    id INT,
    country_code VARCHAR(10),
    number VARCHAR(20),
    label ENUM ('mobile','home','work','primary','pager'),
    user_id INT,
    updated_at DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);