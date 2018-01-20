/*
--BACKEND--
House Table 
    -id (primary key)
    -House Name
    -House Description (text)
    -Price (integer)
    -Price per square foot (integer)
    -SquareFootage (varchar)
    -MonthlyMortgage (integer) (*** function to calculate monthly mortgage based on price ***)
    -Address (varchar)
    -City (text)
    -State (text)
    -Zip (integer)
    -Beds (varchar)
    -Bath (varchar)
    -Year (integer)
    -ImageURL (varchar)

User Table
    -id (primary key)
    -Name (text)
    -Username (varchar)
    -Email (varchar)
    -Password (varchar)

User House Table
    -id (foreign key House)
    -id (foreign key User)


--FRONTEND--
Components
    -App (green background)
    -Login (username, password, loginButton, registerButton)
    -Register (name, username, email, password)
    -Header (logo, logout)
    -Dashboard (addProperty, homeListings, priceFilter)
    -StepOne (name, description, address, city, state, zip)
    -StepTwo (image)
    -StepThree (price, pricePerSqFt, monthlyMortgage)
    -StepFour (sqFt, beds, baths, year)



*/