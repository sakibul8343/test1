const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function addToCart(productName, productPrice) {
    // Create a new row for the cart table
    var newRow = document.createElement("tr");

    // Populate the row with product details
    newRow.innerHTML = `
        <td><a href="#" onclick="removeFromCart(this)"><i class="fas fa-times-circle"></i></a></td>
        <td><img src="Products/f1.jpg" alt="Product Image"></td>
        <td>${productName}</td>
        <td>$${productPrice.toFixed(2)}</td>
        <td>1</td>
        <td>$${productPrice.toFixed(2)}</td>
    `;

    // Append the new row to the cart table
    document.getElementById("cart-body").appendChild(newRow);
}

function removeFromCart(link) {
    // Remove the entire row when the "Remove" button is clicked
    var row = link.parentNode.parentNode;
    row.parentNode.removeChild(row);
}