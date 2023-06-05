// Function to display cart items as a table
function displayCartItems() {
    var cartTable = document.getElementById('cartTable');
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
  
    if (cartItems && cartItems.length > 0) {
      var tableBody = document.createElement('tbody');
  
      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var row = document.createElement('tr');
        row.setAttribute('ata-product', '1');
  
        var imageCell = document.createElement('td');
        var imageElement = document.createElement('img');
        imageElement.src = item.img;
        imageElement.alt = 'Car Image';
        imageCell.appendChild(imageElement);
        row.appendChild(imageCell);
  
        var nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
  
        var priceCell = document.createElement('td');
        priceCell.textContent = item.price;
        row.appendChild(priceCell);
  
        var quantityCell = document.createElement('td');
        var quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = 0;
        quantityInput.min = 1;
        quantityInput.addEventListener('input', updateCartItem);
        quantityCell.appendChild(quantityInput);
        row.appendChild(quantityCell);
  
        var removeCell = document.createElement('td');
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.addEventListener('click', removeCartItem);
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);
  
        tableBody.appendChild(row);
      }
  
      cartTable.appendChild(tableBody);
    } else {
      cartTable.textContent = 'No items in the cart.';
    }
}
  
function updateCartItem(event) {
    var input = event.target;
    var row = input.parentNode.parentNode;
    var rowIndex = row.rowIndex - 1; // Subtract 1 to account for the table header row
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
  
    if (cartItems && cartItems.length > rowIndex) {
      var item = cartItems[rowIndex];
      item.quantity = parseInt(input.value);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    
    updateTotalPrice();
}


// Remove items from cart  
function removeCartItem(event) {
    var button = event.target;
    var row = button.parentNode.parentNode;
    var rowIndex = row.rowIndex - 1; // Subtract 1 to account for the table header row
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
  
    if (cartItems && cartItems.length > rowIndex) {
      cartItems.splice(rowIndex, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      row.remove();
      location.reload();
    }

    updateTotalPrice();
}
displayCartItems();

function updateTotalPrice() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems'));
  var total = 0;

  if (cartItems && cartItems.length > 0) {
    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];
      total += item.price * item.quantity;
    }
  }

  localStorage.setItem('totalPrice', total.toString()); // Store total as string
  console.log(total);
}



// Check Out
var reservBtn = document.getElementById('checkout-btn');
reservBtn.addEventListener('click', reservBtnClicked);

function reservBtnClicked() {
  var totalPrice = parseFloat(localStorage.getItem('totalPrice'));
  var cartItems = JSON.parse(localStorage.getItem('cartItems'));

  if (isNaN(totalPrice) && totalPrice === 0 && cartItems.length === 0) {
      alert("No car has been reserved.");
      window.location.href = "../html/index.html";
  } else if(isNaN(totalPrice) || totalPrice === 0) {
      alert("Please set the rental days for each of your product or remove them from the cart before checking out.");
  } else{
      // If the cart is not empty, proceed with the button click action
      // For example, redirect the user to the shopping cart page
      window.location.href = "../html/checkout.html";
  }
}

