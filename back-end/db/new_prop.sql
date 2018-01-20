INSERT INTO House (
    house_name,
    description,
    price,
    sq_ft,
    monthly_mortgage,
    address,
    city,
    state,
    zip,
    beds,
    baths,
    year_built,
    imgurl
)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
