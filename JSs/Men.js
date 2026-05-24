let productsData = [];

fetch("../JSONs/Men.json")
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

          <button onclick="addToCart(${item.id})">Add to Cart</button>
          <button onclick="buyNow(${item.id})">Buy Now</button>
        </div>
      </div>`;
  });
}

function addToCart(id) {
  const product = productsData.find((p) => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  showModal("Added to cart 🛒");
}

/===========buy now===========/ /
  function addToCart(id) {
    const product = productsData.find((p) => p.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    showModal("Product added to cart 🛒");
  };

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
