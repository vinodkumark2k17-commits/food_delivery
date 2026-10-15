const products = [
  {id:"cosmic-burger",name:"Cosmic Cheese Burger",category:"human",price:499,rating:4.9,time:18,description:"Double solar-grilled patty, lunar cheese, nebula sauce.",ingredients:"Solar-grilled beef, lunar cheddar, nebula sauce, brioche.",origin:"Earth — Sector 03",spice:2,calories:640,compatibility:97,diet:["protein"],tag:"BESTSELLER"},
  {id:"zero-g-pizza",name:"Zero-G Pizza",category:"human",price:549,rating:4.8,time:22,description:"Slow-orbit dough, three cheeses, a little meteorite crunch.",ingredients:"Hand-stretched dough, mozzarella, aged cheddar, tomato.",origin:"Naples — Earth",spice:1,calories:710,compatibility:95,diet:["vegetarian"],tag:"LOCAL FAVOURITE"},
  {id:"earth-fried-chicken",name:"Earth Fried Chicken",category:"human",price:429,rating:4.7,time:20,description:"Twice-crisped, gravity-tested, with a black-hole honey dip.",ingredients:"Free-range chicken, seven-spice crust, honey dip.",origin:"Earth — Sector 02",spice:2,calories:580,compatibility:93,diet:["protein"],tag:"CRUNCH LEVEL 9"},
  {id:"mars-spicy-ramen",name:"Mars Spicy Ramen",category:"human",price:389,rating:4.8,time:16,description:"Red planet broth, springy noodles, politely aggressive heat.",ingredients:"Wheat noodles, red broth, tofu, chilli oil, scallions.",origin:"Mars Colony 07",spice:3,calories:520,compatibility:92,diet:["vegetarian"],tag:"SPICY"},
  {id:"moonlight-pancakes",name:"Moonlight Pancakes",category:"human",price:299,rating:4.6,time:14,description:"Fluffy enough for low gravity. Maple syrup stays put, mostly.",ingredients:"Buttermilk, moon-harvested blueberries, maple syrup.",origin:"Luna — Earth orbit",spice:1,calories:390,compatibility:99,diet:["vegetarian"],tag:"BREAKFAST"},
  {id:"solar-bbq-sandwich",name:"Solar BBQ Sandwich",category:"human",price:359,rating:4.7,time:17,description:"Smoky slow-cooked brisket, with actual sunshine in the sauce.",ingredients:"Slow-cooked brisket, solar BBQ, pickled onion, sourdough.",origin:"Earth — Sector 11",spice:2,calories:560,compatibility:94,diet:["protein"],tag:"SMOKY"},
  {id:"orbit-fries",name:"Orbit Fries",category:"human",price:189,rating:4.7,time:11,description:"Crisp potato spirals. They orbit the dip. It’s science.",ingredients:"Earth potatoes, violet salt, asteroid pepper.",origin:"Earth — Sector 03",spice:1,calories:280,compatibility:99,diet:["vegan"],tag:"SIDE QUEST"},
  {id:"earth-chocolate-cake",name:"Earth Chocolate Cake",category:"human",price:329,rating:4.9,time:15,description:"Dark chocolate, soft centre, absolutely no gravitational restraint.",ingredients:"Dark cacao, cultured cream, sugar, a pinch of sea salt.",origin:"Earth — Sector 01",spice:1,calories:440,compatibility:98,diet:["vegetarian"],tag:"DESSERT"},
  {id:"zorblax-noodles",name:"Zorblax Noodles",category:"alien",price:649,rating:4.9,time:19,description:"Bioluminescent ribbons tossed in a savory, deeply comforting glaze.",ingredients:"Zorblax kelp noodles, glow-pepper, fermented starfruit.",origin:"Zorblax — Andromeda",spice:2,calories:430,compatibility:76,diet:["vegan"],tag:"ALIEN CLASSIC"},
  {id:"nebula-soup",name:"Nebula Soup",category:"alien",price:399,rating:4.7,time:13,description:"A silky, shifting broth. The colour changes; the comfort doesn’t.",ingredients:"Nebula squash, mineral broth, cloud-moss, star anise.",origin:"Nebu-4 — Outer Rim",spice:1,calories:260,compatibility:81,diet:["vegan"],tag:"WARMING"},
  {id:"glorp-bites",name:"Glorp Bites",category:"alien",price:289,rating:4.5,time:10,description:"Crisp outside, delightfully springy within. Less strange than it sounds.",ingredients:"Glorp root, crystal crumbs, tangy plasma dip.",origin:"Glorp — Sector 19",spice:2,calories:310,compatibility:68,diet:["vegan"],tag:"SNACK"},
  {id:"xenthari-crystal-tart",name:"Xenthari Crystal Tart",category:"alien",price:749,rating:4.8,time:24,description:"A delicate mineral-sweet shell, filled with luminous fruit custard.",ingredients:"Crystal pastry, xenthari berry, cloud cream, sugar.",origin:"Xenthari Prime",spice:1,calories:380,compatibility:73,diet:["vegetarian"],tag:"RARE FIND"},
  {id:"plasma-dumplings",name:"Plasma Dumplings",category:"alien",price:529,rating:4.8,time:16,description:"Tender dumplings with a warm, fizzy centre. Not a safety concern.",ingredients:"Moon-moss dough, plasma lentil, sour-glow broth.",origin:"Vela-9 — Orion",spice:2,calories:360,compatibility:79,diet:["vegan","protein"],tag:"FAN FAVOURITE"},
  {id:"moon-moss-curry",name:"Moon-Moss Curry",category:"alien",price:459,rating:4.6,time:18,description:"Earthy, fragrant and just a bit sentient. Kidding. Mostly.",ingredients:"Moon-moss, velvet root, coconut nebula milk, rice.",origin:"Europa Station",spice:3,calories:490,compatibility:70,diet:["vegan"],tag:"COSMIC HEAT"},
  {id:"vortex-fruit",name:"Vortex Fruit",category:"alien",price:219,rating:4.6,time:8,description:"A sweet-tart fruit with a flavour that takes a small detour.",ingredients:"Vortex fruit, crystallized dew, a very small spoon.",origin:"Vortex Belt — Sector 12",spice:1,calories:150,compatibility:64,diet:["vegan"],tag:"FRESH PICK"},
  {id:"klyntor-spice-bowl",name:"Klyntor Spice Bowl",category:"alien",price:799,rating:4.8,time:20,description:"Layered grains and twelve spices. The twelfth is a secret.",ingredients:"Klyntor grains, roasted roots, nebula chilli, herb dust.",origin:"Klyntor — Cygnus",spice:3,calories:610,compatibility:72,diet:["vegan","protein"],tag:"SPICE ROUTE"},
  {id:"alien-cheese-burger",name:"Alien Cheese Burger",category:"fusion",price:629,rating:4.9,time:18,description:"A very Earth bun around a mildly extraterrestrial cheese situation.",ingredients:"Solar patty, xenthari cheese, brioche, comet relish.",origin:"Earth × Xenthari",spice:2,calories:680,compatibility:84,diet:["protein"],tag:"CROWD PLEASER"},
  {id:"galactic-tandoori-wrap",name:"Galactic Tandoori Wrap",category:"fusion",price:469,rating:4.8,time:17,description:"Smoky tandoori paneer, wrapped up with one bright alien pickle.",ingredients:"Tandoori paneer, star pickle, flatbread, mint yoghurt.",origin:"Kerala × Nebu-4",spice:2,calories:470,compatibility:89,diet:["vegetarian","protein"],tag:"CHEF'S PICK"},
  {id:"plasma-paneer-pizza",name:"Plasma Paneer Pizza",category:"fusion",price:699,rating:4.9,time:22,description:"A slow-stretch crust with tandoori paneer and a glowing tomato base.",ingredients:"Stone-baked dough, paneer, plasma tomato, smoked chilli.",origin:"Earth × Europa",spice:2,calories:690,compatibility:91,diet:["vegetarian"],tag:"BESTSELLER"},
  {id:"xeno-fried-rice",name:"Xeno Fried Rice",category:"fusion",price:419,rating:4.7,time:14,description:"Wok-fired rice, comet vegetables, and a sauce with excellent manners.",ingredients:"Wok-fired rice, comet vegetables, tamari, star egg.",origin:"Earth × Zorblax",spice:2,calories:450,compatibility:87,diet:["vegetarian"],tag:"QUICK ORBIT"},
  {id:"cosmic-chicken-curry",name:"Cosmic Chicken Curry",category:"fusion",price:589,rating:4.8,time:21,description:"Slow-simmered comfort with one genuinely unearthly spice.",ingredients:"Chicken, nebula cream, Kerala spices, solar rice.",origin:"Kerala × Xenthari",spice:3,calories:620,compatibility:83,diet:["protein"],tag:"WARM COMFORT"},
  {id:"nebula-ice-cream",name:"Nebula Ice Cream",category:"fusion",price:279,rating:4.8,time:9,description:"Swirls of vanilla and starberry. Melts slower in zero gravity.",ingredients:"Vanilla bean, starberry ripple, cultured cream.",origin:"Earth × Nebu-4",spice:1,calories:260,compatibility:96,diet:["vegetarian"],tag:"SWEET ORBIT"},
  {id:"martian-masala-fries",name:"Martian Masala Fries",category:"fusion",price:249,rating:4.7,time:12,description:"Crispy Earth potatoes wearing a Mars-grown masala coat.",ingredients:"Earth potatoes, Mars masala, lime, cooling nebula dip.",origin:"Earth × Mars",spice:3,calories:330,compatibility:93,diet:["vegan"],tag:"SIDE QUEST"},
  {id:"interstellar-chocolate-shake",name:"Interstellar Chocolate Shake",category:"fusion",price:319,rating:4.8,time:10,description:"Dark chocolate, cold cream, and a tiny edible star. Naturally.",ingredients:"Dark cacao, cultured milk, star sugar, vanilla.",origin:"Earth × Europa",spice:1,calories:390,compatibility:95,diet:["vegetarian"],tag:"DESSERT"}
];

const currency = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const byId = (id) => products.find((product) => product.id === id);
const categoryLabel = (category) => ({human:"Human",alien:"Alien",fusion:"Human × Alien"}[category] || "Across worlds");
const safeStorage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* Browsing still works when storage is unavailable. */ } }
};
let cart = {};
try {
  const stored = JSON.parse(safeStorage.get("gfe-cart") || "{}");
  if (stored && typeof stored === "object" && !Array.isArray(stored)) {
    cart = Object.fromEntries(Object.entries(stored).filter(([id, qty]) => byId(id) && Number.isInteger(qty) && qty > 0).map(([id, qty]) => [id, Math.min(qty, 99)]));
  }
} catch { cart = {}; }
let selectedCategory = "all";
let detailQuantity = 1;
let activeProductId = null;
let offerClaimed = false;
let toastTimer;

const grid = document.querySelector("#food-grid");
const searchInput = document.querySelector("#menu-search");
const searchField = document.querySelector("#search-field");
const priceFilter = document.querySelector("#price-filter");
const dietFilter = document.querySelector("#diet-filter");
const spiceFilter = document.querySelector("#spice-filter");
const sortFilter = document.querySelector("#sort-filter");
const bagDrawer = document.querySelector("#bag-drawer");
const overlay = document.querySelector("#overlay");
const productDialog = document.querySelector("#product-dialog");
const checkoutDialog = document.querySelector("#checkout-dialog");
const announcer = document.querySelector("#announcer");

const money = (amount) => `₹${currency.format(Math.round(amount))}`;
const cartCount = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);
const cartSubtotal = () => Object.entries(cart).reduce((sum, [id, qty]) => sum + (byId(id)?.price || 0) * qty, 0);
const deliveryCost = () => {
  if (!cartCount() || cartSubtotal() >= 1200) return 0;
  const selectedSpeed = document.querySelector('input[name="speed"]:checked')?.value || "standard";
  return {standard:99,express:179,priority:299}[selectedSpeed];
};
const serviceCost = () => cartCount() ? 39 : 0;
const discountCost = () => offerClaimed ? Math.round(cartSubtotal() * .2) : 0;
const totalCost = () => Math.max(0, cartSubtotal() + deliveryCost() + serviceCost() - discountCost());

function saveCart() {
  safeStorage.set("gfe-cart", JSON.stringify(cart));
}

function announce(message) {
  announcer.textContent = "";
  window.setTimeout(() => { announcer.textContent = message; }, 20);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  document.querySelector("#toast-message").textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function productCard(product) {
  return `<article class="food-card" style="animation-delay:${Math.min(products.indexOf(product)%8,7)*35}ms">
    <div class="food-visual" role="button" tabindex="0" data-open-product="${product.id}" aria-label="View ${product.name}">
      <span class="food-dish"></span><span class="food-orbit"></span><span class="food-glint"></span>
      <span class="food-label">${product.origin.toUpperCase()}</span><span class="food-tag">${product.tag}</span><span class="food-hover">View dish <span>↗</span></span>
    </div>
    <div class="food-info"><div class="food-meta"><span class="food-category">${categoryLabel(product.category)}</span><span class="food-rating">★ <b>${product.rating.toFixed(1)}</b></span></div>
      <h3 class="food-name" role="button" tabindex="0" data-open-product="${product.id}">${product.name}</h3><p class="food-description">${product.description}</p>
      <div class="food-card-bottom"><strong class="food-price">${money(product.price)}</strong><span class="food-time">${product.time} min</span><button class="add-button" data-add="${product.id}" aria-label="Add ${product.name} to bag">+</button></div>
    </div>
  </article>`;
}

function activeProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const price = priceFilter.value;
  const diet = dietFilter.value;
  const spice = spiceFilter.value;
  const filtered = products.filter((product) => {
    const words = `${product.name} ${product.description} ${product.category} ${product.ingredients} ${product.tag} ${product.origin}`.toLowerCase();
    const fitsPrice = price === "all" || (price === "under300" && product.price < 300) || (price === "300-600" && product.price >= 300 && product.price <= 600) || (price === "600-1000" && product.price > 600 && product.price <= 1000) || (price === "1000plus" && product.price > 1000);
    const fitsDiet = diet === "all" || (diet === "vegetarian" && product.diet.includes("vegetarian")) || (diet === "vegan" && product.diet.includes("vegan")) || (diet === "protein" && product.diet.includes("protein"));
    const fitsSpice = spice === "all" || (spice === "mild" && product.spice === 1) || (spice === "medium" && product.spice === 2) || (spice === "cosmic" && product.spice === 3);
    return (selectedCategory === "all" || product.category === selectedCategory) && fitsPrice && fitsDiet && fitsSpice && (!query || words.includes(query));
  });
  const sortBy = sortFilter.value;
  if (sortBy === "price-low") filtered.sort((a,b) => a.price - b.price);
  if (sortBy === "price-high") filtered.sort((a,b) => b.price - a.price);
  if (sortBy === "rating") filtered.sort((a,b) => b.rating - a.rating);
  if (sortBy === "fastest") filtered.sort((a,b) => a.time - b.time);
  if (sortBy === "popular") filtered.sort((a,b) => b.rating - a.rating || a.time - b.time);
  return filtered;
}

function renderMenu() {
  const visibleProducts = activeProducts();
  grid.innerHTML = visibleProducts.map(productCard).join("");
  const count = visibleProducts.length;
  document.querySelector("#results-count").textContent = `${count} ${count === 1 ? "dish" : "dishes"}, ready for lift-off`;
  document.querySelector("#empty-results").hidden = count > 0;
  grid.hidden = count === 0;
  searchField.classList.toggle("has-value", Boolean(searchInput.value));
}

function renderFavourites() {
  const favourites = ["cosmic-burger","zorblax-noodles","plasma-paneer-pizza","nebula-ice-cream"];
  document.querySelector("#favourite-strip").innerHTML = favourites.map((id,index) => {
    const p = byId(id);
    return `<button class="favourite-tile" style="--tile-a:${["#8d6f70","#59496d","#77526d","#80728f"][index]};--tile-b:${["#3a2a44","#2c213d","#39243e","#332845"][index]}" data-open-product="${p.id}"><span class="favourite-num">0${index+1} / THIS WEEK</span><span class="favourite-details"><strong>${p.name}</strong><span>★ ${p.rating.toFixed(1)} &nbsp;·&nbsp; ${money(p.price)}</span></span></button>`;
  }).join("");
}

function syncCart() {
  saveCart();
  const count = cartCount();
  const subtotal = cartSubtotal();
  const delivery = deliveryCost();
  const service = serviceCost();
  const total = totalCost();
  document.querySelector("#bag-count").textContent = count;
  document.querySelector("#drawer-count").textContent = `${count} ${count === 1 ? "item" : "items"}`;
  document.querySelector("#bag-subtotal").textContent = money(subtotal);
  document.querySelector("#bag-delivery").textContent = delivery ? money(delivery) : "FREE";
  document.querySelector("#bag-service").textContent = money(service);
  document.querySelector("#bag-total").textContent = money(total);
  document.querySelector("#mobile-bag-count").textContent = `${count} ${count === 1 ? "item" : "items"}`;
  document.querySelector("#mobile-bag-total").textContent = `${money(total)} ↗`;
  document.querySelector("#mobile-bag-bar").classList.toggle("is-visible", count > 0);
  document.querySelector("#bag-empty").hidden = count > 0;
  document.querySelector("#drawer-bottom").classList.toggle("is-empty", count === 0);
  const entries = Object.entries(cart).filter(([id,qty]) => byId(id) && qty > 0);
  document.querySelector("#bag-items").innerHTML = entries.map(([id,qty]) => {
    const p = byId(id);
    return `<div class="bag-line"><div class="bag-thumb" style="--thumb-bg:${p.category === "human" ? "#d8c0bd" : p.category === "alien" ? "#b9adcb" : "#d1b2c5"}"></div><div><div class="bag-item-name">${p.name}</div><div class="bag-item-category">${categoryLabel(p.category)}</div><div class="quantity-control"><button data-qty="${id}" data-delta="-1" aria-label="Decrease ${p.name} quantity">−</button><span>${qty}</span><button data-qty="${id}" data-delta="1" aria-label="Increase ${p.name} quantity">+</button></div><button class="remove-item" data-remove="${id}">Remove</button></div><strong class="bag-item-price">${money(p.price * qty)}</strong></div>`;
  }).join("");
  const countEl = document.querySelector("#bag-count");
  countEl.classList.remove("pulse");
  void countEl.offsetWidth;
  countEl.classList.add("pulse");
  if (checkoutDialog.open) renderCheckoutSummary();
}

function addToCart(id, quantity = 1) {
  const product = byId(id);
  if (!product) return;
  cart[id] = Math.min(99, (cart[id] || 0) + quantity);
  syncCart();
  showToast(`${product.name} added to your bag`);
  announce(`${product.name} added. Bag now has ${cartCount()} items.`);
}

function updateQuantity(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  syncCart();
}

function removeFromCart(id) {
  const product = byId(id);
  delete cart[id];
  syncCart();
  if (product) showToast(`${product.name} removed`);
}

function setCategory(category) {
  selectedCategory = category;
  document.querySelectorAll("[data-filter-category]").forEach((button) => {
    const active = button.dataset.filterCategory === category;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderMenu();
}

function showProduct(id) {
  const product = byId(id);
  if (!product) return;
  activeProductId = id;
  detailQuantity = 1;
  const spice = ["Mild","Medium","Cosmic"];
  const spiceDots = `${"■".repeat(product.spice)}${"□".repeat(3-product.spice)}`;
  document.querySelector("#product-detail").innerHTML = `<div class="detail-shell">
    <div class="detail-visual" style="--detail-bg:${product.category === "human" ? "linear-gradient(145deg,#dbbfba,#79586e)" : product.category === "alien" ? "linear-gradient(145deg,#c7bad8,#514267)" : "linear-gradient(145deg,#dfc0d1,#69476f)"}"><span class="detail-label">${product.origin.toUpperCase()}</span></div>
    <div class="detail-content"><span class="food-category">${categoryLabel(product.category)} / SECTOR MENU</span><h2 id="detail-name">${product.name}</h2><div class="detail-score">★★★★★ <b>${product.rating.toFixed(1)}</b><span>${product.time} min · prepared to order</span></div><p class="detail-description">${product.description}</p><div class="ingredient-line"><b>INGREDIENTS</b><br>${product.ingredients}</div><div class="detail-specs"><div><span>ORIGIN</span><strong>${product.origin}</strong></div><div><span>ALIEN COMPATIBILITY</span><strong>${product.compatibility}%</strong></div><div><span>SPICE / LEVEL</span><strong>${spiceDots} &nbsp;${spice[product.spice-1]}</strong></div><div><span>PREPARATION</span><strong>${product.time} MIN</strong></div><div><span>ENERGY</span><strong>${product.calories} kcal</strong></div><div><span>DIETARY</span><strong>${product.diet.join(", ")}</strong></div></div><div class="detail-bottom"><strong class="detail-price">${money(product.price)}</strong><div class="detail-quantity"><button data-detail-qty="-1" aria-label="Decrease quantity">−</button><span id="detail-quantity">1</span><button data-detail-qty="1" aria-label="Increase quantity">+</button></div><button class="button button-dark detail-add" data-detail-add="${product.id}">Add to bag <span>+</span></button></div></div>
  </div>`;
  if (!productDialog.open) productDialog.showModal();
}

function openDrawer() {
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add("is-visible"));
  bagDrawer.classList.add("is-open");
  bagDrawer.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  bagDrawer.querySelector("[data-close]")?.focus();
}

function closeDrawer() {
  bagDrawer.classList.remove("is-open");
  bagDrawer.setAttribute("aria-hidden","true");
  overlay.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!productDialog.open && !checkoutDialog.open) {
      overlay.hidden = true;
      document.body.style.overflow = "";
    }
  }, 320);
}

function renderCheckoutSummary() {
  document.querySelector("#checkout-summary-items").innerHTML = Object.entries(cart).filter(([id,qty]) => byId(id) && qty > 0).map(([id,qty]) => `<div class="checkout-summary-item"><span>${byId(id).name} × ${qty}</span><strong>${money(byId(id).price*qty)}</strong></div>`).join("");
  document.querySelector("#checkout-item-count").textContent = `${cartCount()} ${cartCount() === 1 ? "item" : "items"}`;
  document.querySelector("#checkout-subtotal").textContent = money(cartSubtotal());
  document.querySelector("#checkout-delivery").textContent = deliveryCost() ? money(deliveryCost()) : "FREE";
  document.querySelector("#checkout-service").textContent = money(serviceCost());
  document.querySelector("#discount-row").hidden = !offerClaimed;
  document.querySelector("#checkout-discount").textContent = `−${money(discountCost())}`;
  document.querySelector("#checkout-total").textContent = money(totalCost());
}

function openCheckout() {
  if (!cartCount()) {
    closeDrawer();
    showToast("Your bag is waiting for its first dish");
    return;
  }
  closeDrawer();
  if (productDialog.open) productDialog.close();
  document.querySelector("#checkout-content").hidden = false;
  document.querySelector("#order-success").hidden = true;
  renderCheckoutSummary();
  checkoutDialog.showModal();
  document.body.style.overflow = "hidden";
}

function closeModal(dialog) {
  if (dialog.open) dialog.close();
  if (!bagDrawer.classList.contains("is-open")) {
    document.body.style.overflow = "";
    overlay.hidden = true;
    overlay.classList.remove("is-visible");
  }
}

function resetFilters() {
  searchInput.value = "";
  priceFilter.value = "all";
  dietFilter.value = "all";
  spiceFilter.value = "all";
  sortFilter.value = "popular";
  setCategory("all");
}

document.querySelectorAll("[data-filter-category]").forEach((button) => button.addEventListener("click", () => setCategory(button.dataset.filterCategory)));
document.querySelectorAll(".category-card").forEach((button) => button.addEventListener("click", () => {
  setCategory(button.dataset.category);
  document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
}));
document.querySelectorAll("[data-footer-category]").forEach((link) => link.addEventListener("click", () => setCategory(link.dataset.footerCategory)));
document.querySelectorAll("[data-open-product]").forEach((el) => el.addEventListener("click", (event) => {
  if (event.target.closest("[data-add]")) return;
  showProduct(el.dataset.openProduct);
}));
document.querySelectorAll("[data-quick-add]").forEach((button) => button.addEventListener("click", () => addToCart(button.dataset.quickAdd)));
document.querySelectorAll("[data-add]").forEach((button) => button.addEventListener("click", () => addToCart(button.dataset.add)));
document.querySelector("#food-grid").addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  const open = event.target.closest("[data-open-product]");
  if (add) addToCart(add.dataset.add);
  else if (open) showProduct(open.dataset.openProduct);
});
document.querySelector("#food-grid").addEventListener("keydown", (event) => {
  const open = event.target.closest("[data-open-product]");
  if (open && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    showProduct(open.dataset.openProduct);
  }
});
document.querySelector("#favourite-strip").addEventListener("click", (event) => {
  const tile = event.target.closest("[data-open-product]");
  if (tile) showProduct(tile.dataset.openProduct);
});
document.querySelector("#product-detail").addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-detail-qty]");
  const addButton = event.target.closest("[data-detail-add]");
  if (quantityButton) {
    detailQuantity = Math.max(1, Math.min(99, detailQuantity + Number(quantityButton.dataset.detailQty)));
    document.querySelector("#detail-quantity").textContent = detailQuantity;
  }
  if (addButton) {
    addToCart(addButton.dataset.detailAdd, detailQuantity);
    closeModal(productDialog);
  }
});
document.querySelector("#bag-items").addEventListener("click", (event) => {
  const qty = event.target.closest("[data-qty]");
  const remove = event.target.closest("[data-remove]");
  if (qty) updateQuantity(qty.dataset.qty, Number(qty.dataset.delta));
  if (remove) removeFromCart(remove.dataset.remove);
});
document.querySelector(".bag-trigger").addEventListener("click", openDrawer);
document.querySelector("#mobile-bag-bar").addEventListener("click", openDrawer);
document.querySelector("#overlay").addEventListener("click", closeDrawer);
document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", closeDrawer));
document.querySelectorAll("[data-close-bag]").forEach((button) => button.addEventListener("click", closeDrawer));
document.querySelector("#checkout-button").addEventListener("click", openCheckout);
document.querySelectorAll("[data-dialog-close]").forEach((button) => button.addEventListener("click", () => closeModal(button.closest("dialog"))));
document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const speed = document.querySelector('input[name="speed"]:checked').value;
  const arrival = {standard:"35 minutes",express:"12 minutes",priority:"6 minutes"}[speed];
  const orderCode = `GX-${Math.floor(1000 + Math.random()*8999)}`;
  document.querySelector("#order-number").textContent = orderCode;
  document.querySelector("#arrival-time").textContent = arrival;
  document.querySelector("#confirmed-destination").textContent = `${document.querySelector("#destination-planet").value} · ${document.querySelector("#destination-region").value}`;
  document.querySelector("#checkout-content").hidden = true;
  document.querySelector("#order-success").hidden = false;
  cart = {};
  offerClaimed = false;
  syncCart();
  checkoutDialog.scrollTo({top:0,behavior:"smooth"});
  announce(`Order ${orderCode} confirmed. Estimated arrival ${arrival}.`);
});
document.querySelector("#continue-shopping").addEventListener("click", () => {
  closeModal(checkoutDialog);
  document.querySelector("#checkout-form").reset();
  document.querySelector("#checkout-content").hidden = false;
  document.querySelector("#order-success").hidden = true;
  document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
});
document.querySelectorAll('input[name="speed"]').forEach((input) => input.addEventListener("change", () => {
  syncCart();
  renderCheckoutSummary();
}));
document.querySelector("#menu-search").addEventListener("input", renderMenu);
document.querySelector("#price-filter").addEventListener("change", renderMenu);
document.querySelector("#diet-filter").addEventListener("change", renderMenu);
document.querySelector("#spice-filter").addEventListener("change", renderMenu);
document.querySelector("#sort-filter").addEventListener("change", renderMenu);
document.querySelector("#reset-filters").addEventListener("click", resetFilters);
document.querySelector("#empty-reset").addEventListener("click", resetFilters);
document.querySelector("#clear-search").addEventListener("click", () => { searchInput.value = ""; renderMenu(); searchInput.focus(); });
document.querySelector(".search-toggle").addEventListener("click", () => {
  document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
  searchField.classList.add("is-open");
  window.setTimeout(() => searchInput.focus(), 450);
});
document.querySelector("#claim-offer").addEventListener("click", () => {
  offerClaimed = true;
  showToast("20% orbit offer claimed. Your future self says thanks.");
  if (checkoutDialog.open) renderCheckoutSummary();
  document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
});
document.querySelector("#toast-close").addEventListener("click", () => document.querySelector("#toast").classList.remove("is-visible"));
document.querySelector(".account-button").addEventListener("click", () => showToast("Guest pilot mode. No account needed."));
document.querySelector(".mobile-menu-toggle").addEventListener("click", (event) => {
  const nav = document.querySelector("#main-nav");
  const open = nav.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
  event.currentTarget.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
document.querySelectorAll("#main-nav a").forEach((link) => link.addEventListener("click", () => {
  document.querySelector("#main-nav").classList.remove("is-open");
  document.querySelector(".mobile-menu-toggle").setAttribute("aria-expanded","false");
}));
window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 20), {passive:true});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && bagDrawer.classList.contains("is-open")) closeDrawer();
  if (event.key === "/" && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
    searchField.classList.add("is-open");
    window.setTimeout(() => searchInput.focus(), 450);
  }
});
productDialog.addEventListener("click", (event) => { if (event.target === productDialog) closeModal(productDialog); });
checkoutDialog.addEventListener("click", (event) => { if (event.target === checkoutDialog) closeModal(checkoutDialog); });
for (const dialog of [productDialog, checkoutDialog]) {
  dialog.addEventListener("close", () => {
    if (!productDialog.open && !checkoutDialog.open && !bagDrawer.classList.contains("is-open")) {
      document.body.style.overflow = "";
      overlay.hidden = true;
      overlay.classList.remove("is-visible");
    }
  });
}

renderMenu();
renderFavourites();
syncCart();
