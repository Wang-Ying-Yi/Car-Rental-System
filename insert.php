<?php
$user_email = $_POST['email'];
$rent_date = date('Y-m-d');
$total_cost = $_POST['totalPriceElement'];
// Extract the integer value from the string
$totalPrice = (int) filter_var($total_cost, FILTER_SANITIZE_NUMBER_INT);

$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbname = "assignment 2";

if (!empty($user_email)) {
    // Create connection
    $conn = mysqli_connect($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL";
        exit();
    } else {
        // Check if email exists in the database
        $sql = "SELECT rent_date FROM renting_history WHERE user_email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $user_email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 0) {
            // Email does not exist, set bond amount to 200
            $bond_amount = 200;
            echo "You should pay $200 bond and " . $total_cost . " rent fee.";

            // Insert user email, rent date, bond amount, and total cost into the database
            $sql = "INSERT INTO renting_history (user_email, rent_date, bond_amount, total_cost) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssii", $user_email, $rent_date, $bond_amount, $totalPrice);
            $stmt->execute();
        } else {
            // Email exists, get the last rent date
            $row = $result->fetch_assoc();
            $last_rent_date = $row['rent_date'];

            // Calculate the difference between the last rent date and the current rent date in months
            $diff = date_diff(date_create($last_rent_date), date_create($rent_date));
            $months = ($diff->y * 12) + $diff->m;

            if ($months >= 3) {
                // Last rent date is more than 3 months ago, set bond amount to 200
                $bond_amount = 200;
                echo "You should pay $200 bond and " . $total_cost . " rent fee.";
                // Update user rent date and bond amount in the database
                $sql = "UPDATE renting_history SET rent_date = ?, bond_amount = ?, total_cost = ? WHERE user_email = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("siis", $rent_date, $bond_amount, $totalPrice, $user_email);
                $stmt->execute();
            } else {
                // Last rent date is within 3 months, set bond amount to 0
                $bond_amount = 0;
                echo "You do not need to pay bond amount, " . $total_cost . " rent fee";
                // Update user rent date and bond amount in the database
                $sql = "UPDATE renting_history SET rent_date = ?, bond_amount = ?, total_cost = ? WHERE user_email = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("siis", $rent_date, $bond_amount, $totalPrice, $user_email);
                $stmt->execute();
            }
        }
        
        // Close the statement and connection
        $stmt->close();
        $conn->close();
    }
} else {
    echo "Please enter your email!";
    die();
}
?>


