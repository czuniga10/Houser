SELECT * FROM House
LEFT JOIN
  Users
    ON House.user_id = users.id
WHERE
  House.user_id = $1
    AND
      House.monthly_mortgage <= $2