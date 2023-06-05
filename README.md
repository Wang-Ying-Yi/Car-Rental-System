# Hertz-UTS Car Rental System
This project is a simplified online car rental system for Hertz-UTS, allowing customers to browse and rent cars conveniently. The website provides features such as car browsing, reservation shopping cart, checkout, and exception handling.

## Functionality
  - Customers can view a variety of cars with detailed information.
  - Customers can add available cars to their reservation shopping cart.
  - Customers can modify the items in the shopping cart.
  - Customers can proceed to checkout with the selected cars.
  - The website handles exceptions, such as adding unavailable cars or checking out without any cars in the shopping cart.
## Objectives
  - Design a JSON file to store car information and a MySQL table for rental history.
  - Implement AJAX to load and retrieve data asynchronously.
  - Use JavaScript to parse JSON and manage session data.
  - Create dynamic webpages reflecting changes in the JSON data.

## Features
#### Data Storage

  - A JSON file named "cars.json" is provided to store information about cars, including make, model, year, price, and availability.
  - A MySQL database table named "Renting_History" keeps track of users' renting history with columns such as user_email, rent_date, total_cost, and bond_amount.
#### Car Browsing

  - AJAX is used to load the "cars.json" file and extract car data to display on the webpage.
  - Cars are presented in a visually appealing tabular format for easy browsing.
  - Each car item includes an "Add to cart" button to add the car to the reservation shopping cart.
#### Car Selection

  - AJAX is used to check the availability of a car when the "Add to cart" button is clicked.
  - If the car is available, it is added to the shopping cart, and a success message is displayed. Otherwise, an alert informs the user that the car is unavailable.
  - Session storage is utilized to store information about items in the shopping cart.
#### Shopping Cart

  - Users can view their reservation shopping cart, which displays the cars they have added.
  - Users can set the rental days or delete cars from the shopping cart.
  - A checkout button is provided to proceed to the checkout page.
## Checkout

  - The checkout page includes a purchase form requesting the user's delivery details, including name, email, address, and payment type.
  - JavaScript validates the "Rental Days" field to ensure it is an integer greater than zero.
  - The user's renting history is retrieved from the "Renting_History" table based on their email address.
  - The rental cost is calculated as the sum of the car items in the shopping cart. If the user hasn't rented within the past three months, a $200 bond amount is added.
  - After filling in the form, clicking "Booking" inserts the new booking information into the "Renting_History" table and updates the availability of the booked items in the "cars.json" file.
  - A success alert is displayed upon completing the checkout process.

## Usage
1. Clone the repository.
2. Set up the necessary environment for running the web application (e.g., XAMPP, HTML, Javascript, CSS, PHP, MySQL).
3. Import the provided "cars.json" into your MySQL database to store car information.
4. Configure the database connection settings in the application code.
5. Launch the web application and start browsing and renting cars.

## Technologies Used
1. HTML, CSS, and JavaScript for frontend development.
2. AJAX for asynchronous data retrieval and updating.
3. JSON for storing car information.
4. MySQL for database management.

## Contributors
This project was created by Ying-Yi Wang. Contributions are welcome via pull requests. If you encounter any issues or have suggestions, please open an issue in the GitHub repository.
