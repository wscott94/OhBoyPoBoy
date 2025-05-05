
const products = [    { id: 1, name: 'Sandwich', price: 13.50 },
    { id: 2, name: 'Salad', price: 12.99 },
    { id: 3, name: 'Shrimp Basket', price: 12.99 },
    { id: 2, name: 'Side', price: 1.99 },
    { id: 2, name: 'Combo', price: 16.00 },
];

let cartItems = [];
let cartTotal = 0;

// Function to update cart items and total
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalElement = document.getElementById('total-price');
    cartTotal = 0;

    // Clear existing cart items
    cartItemsContainer.innerHTML = '';

    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <p>${item.name} - ${item.price}</p>
                <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
            cartTotal += item.price;
        });
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    totalElement.textContent = cartTotal.toFixed(2);
}

// Function to add a product to the cart
function addProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cartItems.push(product);
        updateCart();
    }
}

// Function to remove a product from the cart
function removeItem(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCart();
}

// tracker maps data



// Footer Contact Us Pop up
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }