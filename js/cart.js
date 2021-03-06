/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// Done: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableRows = document.querySelectorAll('#cart tbody tr');
for (let i = 0; i < tableRows.length; i++) {
  tableRows[i].remove();
  
}
  
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  // const tBody = document.querySelectorAll('tbody');
  const tableHead = document.createElement('thead')
  table.appendChild(tableHead);
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  for (let i = 0; i < cart.length; i++) {
    
    const row1 = document.createElement('tr');
    thead.appendChild(row1);

    const td = document.createElement('td');
    row2.textContent = cart.items[i];
    tr.appendChild(td);
  }
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  removeItem();
  // do something with json
  // TODO: Save the cart back to local storage
  // call function that renders table
  renderCart();
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
