var carProduct = document.getElementById('carProduct');
// var btn = document.getElementById('btn');


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost/car_rental/project/json.php');


ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    showCar(ourData);
};
ourRequest.send();

function showCar(data) {
    var htmlString = "";
      for (i = 0; i < data.length; i++) {
        if(data[i].Availability == true){
          htmlString += "<div class='box'>\n" +
            "<img src='../images/" + i + ".png' class='img'>\n" +
            "<h3 class='car-name'>" + data[i].Category + "-" + data[i].Brand + "-" + data[i].Model + "-" + data[i].Modelyear + "</h3>\n" +
            "<p><span>mileage</span>: " + data[i].Mileage + "</p>\n" +
            "<p><span>fuel type</span>: petrol</p>\n" +
            "<p class='price-per-day'><span>price_per_day: </span>" + data[i].Priceperday + "</p>\n" +
            "<p><span>availability</span>: " + data[i].Availability + "</p>\n" +
            "<p><span>description</span>: " + data[i].Description + "</p>\n" +
            "<button class='btn-cart'>Add To Cart</button>\n" +
            "</div>";
        }else{
          htmlString += "<div class='box'>\n" +
            "<img src='../images/" + i + ".png' class='img'>\n" +
            "<h3 class='car-name'>" + data[i].Category + "-" + data[i].Brand + "-" + data[i].Model + "-" + data[i].Modelyear + "</h3>\n" +
            "<p><span>mileage</span>: " + data[i].Mileage + "</p>\n" +
            "<p><span>fuel type</span>: petrol</p>\n" +
            "<p class='price-per-day'><span>price_per_day: </span>" + data[i].Priceperday + "</p>\n" +
            "<p><span>availability</span>: " + data[i].Availability + "</p>\n" +
            "<p><span>description</span>: " + data[i].Description + "</p>\n" +
            "<button class='btn-cart-False'>Add To Cart</button>\n" +
            "</div>";
        }
      }
    carProduct.insertAdjacentHTML('beforeend', htmlString)
}


// Verify cartItems is empty or not
var cartItems = JSON.parse(localStorage.getItem('cartItems'));
// Initialize cartItems if it doesn't exist
if (!cartItems) {
  cartItems = [];
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-cart')) {
    var button = event.target;
    var container = button.parentNode;
    var imgElement = container.querySelector('.img');
    var nameElement = container.querySelector('.car-name');
    var priceElement = container.querySelector('.price-per-day');

    // Check if all required elements are present
    if (imgElement && nameElement && priceElement) {
      var img = imgElement.getAttribute('src');
      var name = nameElement.textContent;
      var price = priceElement.childNodes[1].textContent.trim();

      // Create an object with the selected car data
      var carData = {
        img: img,
        name: name,
        price: price
      };

      // Check if the item already exists in the cartItems array
      var itemExists = cartItems.some(function(item) {
        return item.name === carData.name;
      });

      if (!itemExists) {
        // Add the car data to the cartItems array
        cartItems.push(carData);

        // Store the updated cartItems array in localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Log the updated cartItems array to the console
        console.log(cartItems);
      } else {
        // Display a message indicating that the item is already in the cart
        alert("Item already in cart!");
      }
    } else {
      console.error("Required elements not found.");
    }
  }else if (event.target.classList.contains('btn-cart-False')){
    alert('Sorry, the car is not available now. Please try other cars.');
  }
});



// Check Out
var reservBtn = document.getElementById('reservBtn');
reservBtn.addEventListener('click', reservBtnClicked);

function reservBtnClicked() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items to the cart before placing an order.");
        return;
    }
  
    // If the cart is not empty, proceed with the button click action
    // For example, redirect the user to the shopping cart page
    window.location.href = "../html/shoppingcart.html";
}




