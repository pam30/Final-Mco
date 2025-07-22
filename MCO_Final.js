 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grocery App</title>
</head>
<body>
  <button onclick="startApp()">Start Shopping</button>

  <script>
    // Grocery data
const groceryData = {
    fruits: [
      { name: "Kiwi", price: 180 },
      { name: "Java Plum", price: 100 },
      { name: "Mango", price: 160 },
      { name: "Strawberry", price: 250 },
      { name: "Avocado", price: 270 },
    ],
    drinks: [
      { name: "Mountain Dew", price: 20 },
      { name: "Nestie", price: 25 },
      { name: "Buko Juice", price: 20 },
      { name: "Milk Tea", price: 35 },
      { name: "Royal", price: 40 },
    ],
    hygiene: [
      { name: "Alcohol", price: 100 },
      { name: "Deodorant", price: 60 },
      { name: "Lotion", price: 180 },
      { name: "Soap", price: 35 },
      { name: "Mouthwash", price: 120 },
    ],
    sweets: [
      { name: "Honey", price: 130 },
      { name: "Gummy", price: 50 },
      { name: "Donut", price: 190 },
      { name: "Macarons", price: 200 },
      { name: "Milkita", price: 30 },
    ],
  };
  
  // User login
  function login() {
    const name = prompt("Enter your name:");
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
    alert(`Welcome, ${name}! Happy shopping!`);
    return { name, username, password };
  }
  
  // Cart management
  let cart = [];
  
  function addToCart(item, quantity) {
    if (!isNaN(quantity) && quantity > 0) {
      cart.push({ item, quantity });
      alert(`${quantity}x ${item.name} added to the cart!`);
    } else {
      alert("Invalid quantity! Please enter a valid number.");
    }
  }
  
  function removeFromCart(itemName) {
    const initialCartLength = cart.length;
    cart = cart.filter(cartItem => cartItem.item.name.toLowerCase() !== itemName.toLowerCase());
    if (cart.length < initialCartLength) {
      alert(`${itemName} removed from the cart.`);
    } else {
      alert(`${itemName} not found in the cart.`);
    }
  }
  
  function viewCart() {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    let message = "Items in your cart:\n";
    let total = 0;
    cart.forEach(({ item, quantity }, index) => {
      message += `${index + 1}. ${item.name} - ₱${item.price} x ${quantity} = ₱${item.price * quantity}\n`;
      total += item.price * quantity;
    });
    message += `\nTotal: ₱${total}`;
    alert(message);
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }
    viewCart();
    const confirmCheckout = confirm("Do you want to proceed to checkout?");
    if (confirmCheckout) {
      alert("Thank you for your purchase!");
      cart = []; // clear cart
    } else {
      alert("Checkout cancelled.");
    }
  }
  
  // Utility to browse items
  function browseCategory(categoryName) {
    const category = groceryData[categoryName];
    if (!category) {
      alert("Invalid category.");
      return;
    }
  
    let itemList = `Items in ${categoryName}:\n`;
    category.forEach((item, index) => {
      itemList += `${index + 1}. ${item.name} - ₱${item.price}\n`;
    });
  
    alert(itemList);
    const itemIndex = parseInt(prompt("Enter the item number to add to cart:")) - 1;
    const quantity = parseInt(prompt("Enter the quantity:"));
  
    if (itemIndex >= 0 && itemIndex < category.length) {
      addToCart(category[itemIndex], quantity);
    } else {
      alert("Invalid item selection.");
    }
  }
  

    function startApp() {
      login();
      browseCategory("fruits");
      viewCart();
      checkout();
    }
  </script>
</body>
</html>
     
Show quoted text
