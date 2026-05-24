let productsData = [];

fetch("../JSONs/shorts.json")
  .then((res) => res.json())
  .then((data) => {
    productsData = data;
    render(data);
  });

function render(data) {
  const container = document.getElementById("products");

  data.forEach((item) => {
    container.innerHTML += `<div class="card">
        <img src="${item.image}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span class="price">$${item.price}</span>

          <button class="cart-btn" onclick="addToCart(${item.id})">
            Add to Cart
          </button>

          <button class="buy-btn" onclick="buyNow(${item.id})">
            Buy Now
          </button>
        </div>
      </div>`;
  });
}

/* CART */
function addToCart(id) {
  const product = productsData.find((p) => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  showModal("Added to cart 🛒");
}

/* BUY NOW */
window.buyNow = function (id) {
  const product = productsData.find((p) => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  showModal("Redirecting 💳");

  setTimeout(() => {
    window.location.href = "cart.html";
  }, 1200);
};

/* MODAL */
function showModal(text) {
  const modal = document.getElementById("modal");
  const textEl = document.getElementById("modal-text");

  textEl.innerText = text;
  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.display = "none";
  }, 1500);
}
