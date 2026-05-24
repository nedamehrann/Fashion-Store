let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart");

function renderCart() {
  container.innerHTML = "";

  cart.forEach((item, index) => {
    container.innerHTML += `<div class="card">
        <img src="${item.image}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span>$${item.price}</span>
        </div>

        <button onclick="removeItem(${index})">Remove</button>
      </div>`;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
