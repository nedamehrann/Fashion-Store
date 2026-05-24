const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const value = searchInput.value.toLowerCase().trim();

    if (value === "dress" || value === "dresses") {
      window.location.href = "dress.html";
    } else if (
      value === "t shirts" ||
      value === "tshirt" ||
      value === "t-shirts"
    ) {
      window.location.href = "tshirts.html";
    } else if (value === "pants") {
      window.location.href = "pants.html";
    } else if (value === "shorts") {
      window.location.href = "shorts.html";
    } else if (value === "accessories") {
      window.location.href = "accessories.html";
    } else {
      showModal("No category found 🔍");
    }

    searchInput.value = "";
  }
});

//===========modal============//

function showModal(text) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");

  modalText.innerText = text;

  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.display = "none";
  }, 1500);
}
