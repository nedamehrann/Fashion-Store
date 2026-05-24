let productsData = [];

fetch("../JSONs/Women.json")
  .then((res) => res.json())
  .then((data) => {
    productsData = data;
    renderProducts(data);
  });

function renderProducts(data) {
  const container = document.getElementById("products");

  data.forEach((item) => {
    container.innerHTML += `<div class="card">
        <img src="${item.image}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span>$${item.price}</span>

          <button onclick="addToCart(${item.id})" class="btn cart-btn">
            Add to Cart
            </button>

          <button onclick="buyNow(${item.id})" class="btn buy-btn">
             Buy Now
            </button>
        </div>
      </div>`;
  });
}

function addToCart(id) {
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    console.log("Product not found!");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("Cart now:", cart);
  alert("Added to cart!");
}

//===========buy now===========//

function addToCart(id) {
  const product = productsData.find((p) => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  showModal("Product added to cart 🛒");
}

function buyNow(id) {
  const product = productsData.find((p) => p.id === id);

  showModal("Redirecting to checkout 💳");

  setTimeout(() => {
    window.location.href = "cart.html";
  }, 1500);
}

//==========Modal===========//

function showModal(message) {
  const modal = document.getElementById("modal");
  const text = document.getElementById("modal-text");

  text.innerText = message;
  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.display = "none";
  }, 2000);
}
