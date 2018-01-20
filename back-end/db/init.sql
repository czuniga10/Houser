DROP TABLE IF EXISTS House, Users;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT,
    name TEXT
);

CREATE TABLE House (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    house_name TEXT,
    description TEXT,
    price INT,
    sq_ft TEXT,
    monthly_mortgage INT,
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    beds TEXT,
    bath TEXT,
    year_built TEXT,
    imgurl TEXT
);


-- INSERT INTO Users (username, password, email, name)
-- VALUES ('text_username', 'password', 'a@a.com', 'test_name');

-- INSERT INTO House (user_id, house_name, description, price, sq_ft, monthly_mortgage, address, city, state, zip, beds, bath, year_built, imgurl)
-- VALUES (1, 'myHouse', 'my house is cool', 100000, '2000', 1500, '123 e 456 w', 'Provo', 'UT', '84088', '3', '2', '2107', 'www.icon.com');