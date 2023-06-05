# Car-Rental-System

This web application serves as a car rental system, allowing users to browse and select cars, add them to a reservation shopping cart, and proceed to checkout to complete their booking.

Features
Data Storage

A JSON file named "cars.json" is provided to store information about cars, including make, model, year, price, and availability.
A MySQL database table named "Renting_History" keeps track of users' renting history with columns such as user_email, rent_date, and bond_amount.
Car Browsing

AJAX is used to load the "cars.json" file and extract car data to display on the webpage.
Cars are presented in a visually appealing tabular format for easy browsing.
Each car item includes an "Add to cart" button to add the car to the reservation shopping cart.
Car Selection

AJAX is used to check the availability of a car when the "Add to cart" button is clicked.
If the car is available, it is added to the shopping cart, and a success message is displayed. Otherwise, an alert informs the user that the car is unavailable.
Session storage is utilized to store information about items in the shopping cart.
Shopping Cart

Users can view their reservation shopping cart, which displays the cars they have added.
Users can set the rental days or delete cars from the shopping cart.
A checkout button is provided to proceed to the checkout page.
Checkout

The checkout page includes a purchase form requesting the user's delivery details, including name, email, address, and payment type.
JavaScript validates the "Rental Days" field to ensure it is an integer greater than zero.
The user's renting history is retrieved from the "Renting_History" table based on their email address.
The rental cost is calculated as the sum of the car items in the shopping cart. If the user hasn't rented within the past three months, a $200 bond amount is added.
After filling in the form, clicking "Booking" inserts the new booking information into the "Renting_History" table and updates the availability of the booked items in the "cars.json" file.
A success alert is displayed upon completing the checkout process.
Usage
Clone the repository.
Set up the necessary environment for running the web application (e.g., web server, PHP, MySQL).
Import the provided "cars.json" into your MySQL database to store car information.
Configure the database connection settings in the application code.
Launch the web application and start browsing and renting cars.
Contributing
Contributions are welcome! Please follow the standard GitHub workflow:

Fork the repository.
Create a new branch for your feature or bug fix.
Develop and test your code changes.
Commit your changes with clear descriptions.
Push your code to your forked repository.
Submit a pull request to the main repository.
