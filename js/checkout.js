// Retrieve the total price from local storage
var totalPrice = localStorage.getItem('totalPrice');
// Select the HTML input element
var totalPriceElement = document.getElementById('totalPriceElement');

// Set the value of the input element to display the total price
totalPriceElement.value += totalPrice;






// Continue Selection
var continueBtn = document.getElementById('ContinueSelect');
continueBtn.addEventListener('click', ContBtnClicked);

function ContBtnClicked() {
    window.location.href = "../html/index.html";
}


// Booking Button
var bookingBtn = document.getElementById('bookingBtn');
bookingBtn.addEventListener('click', bookingBtnClicked);

function bookingBtnClicked() {
    // Get the input field values
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var userEmail = $('#email').val();
    var addressLine1 = $('#address-line1').val();
    var addressLine2 = $('#address-line2').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var postcode = $('#postcode').val();
    var paymentType = $('#payment-type').val();

    // Check if all form fields are filled
    if (firstName.trim() === '' || lastName.trim() === '' || userEmail.trim() === '' || addressLine1.trim() === '' || city.trim() === '' || state.trim() === '' || postcode.trim() === '' || paymentType.trim() === '') {
        alert("Please fill in all form fields");
        return;
    }

    // Email format validation
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(userEmail)) {
        alert("Email format is incorrect");
        return;
    }

    var formData = {
        firstName: firstName,
        lastName: lastName,
        email: userEmail,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        state: state,
        postcode: postcode,
        paymentType: paymentType
    };

    alert("Booking Successfully");
    localStorage.clear(); // Reset localStorage
    window.location.href = "../html/index.html";
}


