let allProducts = [];
let filteredProducts = [];

// Fetch Data
async function fetchData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    allProducts = data;
    filteredProducts = data;

    document.getElementById("loader").style.display = "none";
    renderProducts();
  } catch (err) {
    document.getElementById("loader").style.display = "none";
    document.getElementById("error").innerText = "Error loading data";
  }
}

// Render Products
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  filteredProducts.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}">
      <h4>${p.title.substring(0,20)}</h4>
      <p>${p.description.substring(0,60)}...</p>
      <button class="price-btn">$${p.price}</button>
      <button class="view-btn" data-id="${p.id}">View More</button>
    `;

    container.appendChild(card);
  });
}

// Search Filter
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  filteredProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  applyCategory();
});

// Category Filter
document.getElementById("category").addEventListener("change", applyCategory);

function applyCategory() {
  const cat = document.getElementById("category").value;
  const searchVal = document.getElementById("search").value.toLowerCase();

  let temp = allProducts.filter(p =>
    p.title.toLowerCase().includes(searchVal)
  );

  if (cat !== "all") {
    temp = temp.filter(p => p.category === cat);
  }

  filteredProducts = temp;
  renderProducts();
}

// Sort Price
document.getElementById("lowSort").addEventListener("click", () => {
  filteredProducts.sort((a,b) => a.price - b.price);
  renderProducts();
});

document.getElementById("highSort").addEventListener("click", () => {
  filteredProducts.sort((a,b) => b.price - a.price);
  renderProducts();
});

// View Details (Event Delegation)
document.getElementById("products").addEventListener("click", e => {
  if (e.target.classList.contains("view-btn")) {
    const id = e.target.getAttribute("data-id");
    viewDetails(id);
  }
});

function viewDetails(id) {
  const p = allProducts.find(x => x.id == id);

  document.getElementById("modal-title").innerText = p.title;
  document.getElementById("modal-img").src = p.image;
  document.getElementById("modal-desc").innerText = p.description;
  document.getElementById("modal-price").innerText = "$" + p.price;

  document.getElementById("modal").style.display = "block";
}

// Close Modal
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// Init
fetchData();