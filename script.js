/* ============ DATA — edit these to match your restaurant ============ */
const CURRENCY = "₹";
const GST_RATE = 0.05;
const DELIVERY_FEE = 40;

const BRANCHES = [
  { id: "central", name: "Central (Main) Branch", address: "12 MG Road, Bengaluru, Karnataka 560001", phone: "+91 98765 43210", hours: "11 AM – 11 PM",
    map: "MG Road, Bengaluru" },
  { id: "indira", name: "Indiranagar Branch", address: "45 100 Feet Road, Indiranagar, Bengaluru 560038", phone: "+91 98765 43211", hours: "11 AM – 12 AM",
    map: "100 Feet Road, Indiranagar, Bengaluru" },
  { id: "kora", name: "Koramangala Branch", address: "8 80 Feet Road, Koramangala, Bengaluru 560034", phone: "+91 98765 43212", hours: "10 AM – 11 PM",
    map: "80 Feet Road, Koramangala, Bengaluru" },
];

const IMG_BASE = "https://images.unsplash.com/photo-";
const imgUrl = (id) => `${IMG_BASE}${id}?auto=format&fit=crop&w=600&h=420&q=70`;

const MENU = [
  { id: 1, name: "Paneer Tikka", cat: "Starters", price: 260, veg: true, img: "1567188040759-fb8a883dc6d8", emoji: "🧀", desc: "Char-grilled cottage cheese marinated in spiced yoghurt." },
  { id: 2, name: "Chicken 65", cat: "Starters", price: 290, veg: false, img: "1565557623262-b51c2513a641", emoji: "🍗", desc: "Crispy, fiery South Indian fried chicken bites." },
  { id: 3, name: "Veg Spring Rolls", cat: "Starters", price: 190, veg: true, img: "1695712641569-05eee7b37b6d", emoji: "🥟", desc: "Golden rolls stuffed with seasoned vegetables." },
  { id: 4, name: "Butter Chicken", cat: "Mains", price: 360, veg: false, img: "1603894584373-5ac82b2ae398", emoji: "🍛", desc: "Tandoori chicken simmered in creamy tomato gravy." },
  { id: 5, name: "Dal Makhani", cat: "Mains", price: 240, veg: true, img: "1736680056444-02b10f16a245", emoji: "🥘", desc: "Black lentils slow-cooked overnight with butter and cream." },
  { id: 6, name: "Palak Paneer", cat: "Mains", price: 270, veg: true, img: "1767114915936-745dd372f1d8", emoji: "🥬", desc: "Fresh spinach curry with soft paneer cubes." },
  { id: 7, name: "Lamb Rogan Josh", cat: "Mains", price: 460, veg: false, img: "1545247181-516773cae754", emoji: "🍖", desc: "Kashmiri-style lamb in aromatic red gravy." },
  { id: 8, name: "Hyderabadi Biryani", cat: "Rice & Breads", price: 340, veg: false, img: "1589302168068-964664d93dc0", emoji: "🍚", desc: "Dum-cooked basmati layered with spiced chicken." },
  { id: 9, name: "Veg Biryani", cat: "Rice & Breads", price: 260, veg: true, img: "1599043513900-ed6fe01d3833", emoji: "🍲", desc: "Fragrant rice with seasonal vegetables and saffron." },
  { id: 10, name: "Garlic Naan", cat: "Rice & Breads", price: 60, veg: true, img: "1697155406014-04dc649b0953", emoji: "🫓", desc: "Tandoor-baked bread brushed with garlic butter." },
  { id: 11, name: "Gulab Jamun", cat: "Desserts", price: 120, veg: true, img: "1593701461250-d7b22dfd3a77", emoji: "🍩", desc: "Warm milk dumplings soaked in rose-cardamom syrup." },
  { id: 12, name: "Rasmalai", cat: "Desserts", price: 140, veg: true, emoji: "🍮", desc: "Soft cheese patties in chilled saffron milk." },
  { id: 13, name: "Mango Lassi", cat: "Drinks", price: 110, veg: true, img: "1546173159-315724a31696", emoji: "🥭", desc: "Thick yoghurt shake with Alphonso mango." },
  { id: 14, name: "Masala Chai", cat: "Drinks", price: 60, veg: true, img: "1693302050215-66ae33076745", emoji: "☕", desc: "Spiced Indian tea brewed with fresh ginger." },
  { id: 15, name: "Fresh Lime Soda", cat: "Drinks", price: 80, veg: true, img: "1634976245495-443328555f70", emoji: "🍋", desc: "Sweet, salty or mixed — your choice." },
];

const SEEDED_REVIEWS = [
  { name: "Ananya R.", rating: 5, text: "The butter chicken is the best I've had in the city. Staff were warm and the ambience is lovely.", date: "2026-09-20" },
  { name: "Karthik M.", rating: 5, text: "Booked a table online and it was ready when we arrived. Biryani was perfectly cooked!", date: "2026-09-12" },
  { name: "Sneha P.", rating: 4, text: "Great food and quick delivery. Naan was still hot. Desserts are a must-try.", date: "2026-08-30" },
  { name: "Rahul S.", rating: 4, text: "Lovely family dinner. Service was slightly slow on Saturday but the food made up for it.", date: "2026-08-18" },
];

const TIMES = ["12:00","12:30","13:00","13:30","14:00","19:00","19:30","20:00","20:30","21:00","21:30","22:00"];

/* Floor plan: seats + shape. 'wide' spans two columns. */
const TABLES = [
  { id: "T1", seats: 2 }, { id: "T2", seats: 2 }, { id: "T3", seats: 4, round: true }, { id: "T4", seats: 4, round: true },
  { id: "T5", seats: 4 }, { id: "T6", seats: 6, wide: true }, { id: "T7", seats: 2 },
  { id: "T8", seats: 4, round: true }, { id: "T9", seats: 4 }, { id: "T10", seats: 8, wide: true }, { id: "T11", seats: 2 },
];

/* ============ HELPERS ============ */
const $ = (s) => document.querySelector(s);
const money = (n) => CURRENCY + Math.round(n).toLocaleString("en-IN");
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ============ NAV ============ */
$("#year").textContent = new Date().getFullYear();
$("#burger").onclick = () => $("#navLinks").classList.toggle("open");
$("#navLinks").onclick = () => $("#navLinks").classList.remove("open");

/* ============ MENU ============ */
let activeCat = "All";
function renderFilters() {
  const cats = ["All", ...new Set(MENU.map((m) => m.cat))];
  $("#filters").innerHTML = cats.map((c) => `<button class="chip ${c === activeCat ? "active" : ""}" data-c="${c}">${c}</button>`).join("");
}
function renderMenu() {
  const items = MENU.filter((m) => activeCat === "All" || m.cat === activeCat);
  $("#menuGrid").innerHTML = items.map((m) => `
    <article class="dish">
      <div class="dish-img">${m.img ? `<img src="${imgUrl(m.img)}" alt="${m.name}" loading="lazy" onerror="this.remove()">` : ""}<span class="fallback">${m.emoji}</span></div>
      <div class="dish-body">
        <div class="dish-top"><h3>${m.name}</h3><span class="veg ${m.veg ? "" : "non"}" title="${m.veg ? "Vegetarian" : "Non-vegetarian"}"></span></div>
        <p>${m.desc}</p>
        <div class="dish-bottom"><span class="price">${money(m.price)}</span><button class="add" data-id="${m.id}">Add +</button></div>
      </div>
    </article>`).join("");
}
$("#filters").onclick = (e) => {
  const b = e.target.closest(".chip"); if (!b) return;
  activeCat = b.dataset.c; renderFilters(); renderMenu();
};
$("#menuGrid").onclick = (e) => {
  const b = e.target.closest(".add"); if (!b) return;
  addToCart(+b.dataset.id);
  b.textContent = "Added ✓"; setTimeout(() => (b.textContent = "Add +"), 700);
};

/* ============ CART & ORDER ============ */
let cart = store.get("cart", {}); // {id: qty}
const drawer = $("#drawer"), overlay = $("#overlay");
function openCart() { drawer.classList.add("open"); overlay.classList.add("show"); drawer.setAttribute("aria-hidden", "false"); }
function closeCart() { drawer.classList.remove("open"); overlay.classList.remove("show"); drawer.setAttribute("aria-hidden", "true"); }
$("#openCart").onclick = openCart; $("#closeCart").onclick = closeCart; overlay.onclick = closeCart;

function addToCart(id) { cart[id] = (cart[id] || 0) + 1; saveCart(); }
function changeQty(id, d) { cart[id] = (cart[id] || 0) + d; if (cart[id] <= 0) delete cart[id]; saveCart(); }
function saveCart() { store.set("cart", cart); renderCart(); }

function isDelivery() { return document.querySelector('input[name="type"]:checked').value === "delivery"; }

function renderCart() {
  const ids = Object.keys(cart);
  const count = ids.reduce((s, id) => s + cart[id], 0);
  $("#cartCount").textContent = count;
  $("#cartFoot").style.display = count ? "block" : "none";
  if (!count) { $("#cartItems").innerHTML = `<p class="empty">Your cart is empty.<br>Add something delicious! 🍽️</p>`; return; }
  let sub = 0;
  $("#cartItems").innerHTML = ids.map((id) => {
    const m = MENU.find((x) => x.id == id); const line = m.price * cart[id]; sub += line;
    return `<div class="cart-item"><span class="emoji">${m.img ? `<img src="${imgUrl(m.img)}" alt="" onerror="this.replaceWith(document.createTextNode('${m.emoji}'))">` : m.emoji}</span>
      <div class="info"><b>${m.name}</b><br><small>${money(m.price)} each</small></div>
      <div class="qty"><button data-d="-1" data-id="${id}">−</button><b>${cart[id]}</b><button data-d="1" data-id="${id}">+</button></div>
      <b>${money(line)}</b></div>`;
  }).join("");
  const gst = sub * GST_RATE, del = isDelivery() ? DELIVERY_FEE : 0;
  $("#subTotal").textContent = money(sub); $("#gst").textContent = money(gst);
  $("#deliveryFee").textContent = money(del); $("#grandTotal").textContent = money(sub + gst + del);
  $("#deliveryRow").style.display = isDelivery() ? "flex" : "none";
  $("#oAddress").style.display = isDelivery() ? "block" : "none";
  $("#oAddress").required = isDelivery();
}
$("#cartItems").onclick = (e) => {
  const b = e.target.closest("button[data-id]"); if (b) changeQty(b.dataset.id, +b.dataset.d);
};
document.querySelectorAll('input[name="type"]').forEach((r) => (r.onchange = renderCart));

$("#orderForm").onsubmit = (e) => {
  e.preventDefault();
  const total = $("#grandTotal").textContent;
  const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000);
  const branch = BRANCHES.find((b) => b.id === $("#oBranch").value);
  const orders = store.get("orders", []);
  orders.push({ orderId, cart, total, name: $("#oName").value, branch: branch.name, at: Date.now() });
  store.set("orders", orders);
  cart = {}; saveCart(); closeCart(); e.target.reset();
  showModal("Order placed! 🎉",
    `Thanks ${orders.at(-1).name}! Your order ${orderId} (${total}) from ${branch.name} is being prepared.\n${isDelivery() ? "Estimated delivery: 30–40 minutes." : "Ready for pickup in about 20 minutes."}`);
};

/* ============ BOOKING / SEATING ============ */
const dateEl = $("#bDate"), timeEl = $("#bTime"), branchEl = $("#bBranch");
let selectedTable = null;
const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
dateEl.min = dateEl.value = today.toISOString().slice(0, 10);
timeEl.innerHTML = TIMES.map((t) => `<option>${t}</option>`).join("");

/* deterministic pseudo-"already booked" tables so the demo looks realistic */
function hash(str) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; }
function takenTables() {
  const key = [branchEl.value, dateEl.value, timeEl.value].join("|");
  const taken = new Set(TABLES.filter((t) => hash(key + t.id) % 100 < 30).map((t) => t.id));
  store.get("bookings", []).filter((b) => b.key === key).forEach((b) => taken.add(b.table));
  return taken;
}
function renderFloor() {
  const taken = takenTables(); const guests = +$("#bGuests").value || 1;
  if (selectedTable && taken.has(selectedTable)) selectedTable = null;
  $("#floor").innerHTML = TABLES.map((t) => {
    const isTaken = taken.has(t.id);
    const small = t.seats < guests;
    return `<button type="button" class="table ${t.round ? "round" : ""} ${t.wide ? "wide" : ""} ${isTaken ? "taken" : ""} ${selectedTable === t.id ? "selected" : ""}"
      data-id="${t.id}" ${isTaken ? "disabled" : ""} title="${small ? "Too small for your group" : ""}" style="${small && !isTaken ? "opacity:.55" : ""}">
      ${t.id}<small>${t.seats} seats</small></button>`;
  }).join("");
  updateSelectedInfo();
}
function updateSelectedInfo() {
  const t = TABLES.find((x) => x.id === selectedTable);
  $("#selectedInfo").textContent = t ? `Table ${t.id} • ${t.seats} seats` : "No table selected";
}
$("#floor").onclick = (e) => {
  const b = e.target.closest(".table"); if (!b || b.disabled) return;
  const t = TABLES.find((x) => x.id === b.dataset.id);
  if (t.seats < +$("#bGuests").value) { alert(`Table ${t.id} seats only ${t.seats}. Please pick a larger table or reduce guests.`); return; }
  selectedTable = t.id; renderFloor();
};
["bBranch", "bDate", "bTime", "bGuests"].forEach((id) => ($("#" + id).onchange = $("#" + id).oninput = renderFloor));

function renderBookings() {
  const list = store.get("bookings", []);
  $("#myBookings").innerHTML = list.length ? `<h3>Your bookings</h3>` + list.map((b, i) => `
    <div class="booking-item"><span>🪑 <b>${b.table}</b> • ${b.branchName} • ${b.date} at ${b.time} • ${b.guests} guests • ${esc(b.name)}</span>
    <button data-i="${i}">Cancel</button></div>`).join("") : "";
}
$("#myBookings").onclick = (e) => {
  const b = e.target.closest("button[data-i]"); if (!b) return;
  const list = store.get("bookings", []); list.splice(+b.dataset.i, 1); store.set("bookings", list);
  renderBookings(); renderFloor();
};
$("#bookForm").onsubmit = (e) => {
  e.preventDefault();
  if (!selectedTable) { alert("Please select a table on the floor plan."); return; }
  const branch = BRANCHES.find((b) => b.id === branchEl.value);
  const booking = { key: [branchEl.value, dateEl.value, timeEl.value].join("|"), table: selectedTable, branchName: branch.name,
    date: dateEl.value, time: timeEl.value, guests: +$("#bGuests").value, name: $("#bName").value, phone: $("#bPhone").value };
  const list = store.get("bookings", []); list.push(booking); store.set("bookings", list);
  showModal("Table booked! ✅", `Table ${booking.table} at ${branch.name}\n${booking.date} • ${booking.time} • ${booking.guests} guests\nSee you soon, ${booking.name}!`);
  selectedTable = null; renderBookings(); renderFloor();
};

/* ============ REVIEWS ============ */
let rating = 0;
const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);
function renderReviews() {
  const all = [...store.get("reviews", []), ...SEEDED_REVIEWS];
  $("#reviewCount").textContent = all.length;
  $("#avgRating").textContent = (all.reduce((s, r) => s + r.rating, 0) / all.length).toFixed(1) + " ★";
  $("#reviewGrid").innerHTML = all.map((r) => `
    <div class="review"><div class="stars">${stars(r.rating)}</div><p>“${esc(r.text)}”</p>
    <div class="who"><span class="avatar">${esc(r.name[0].toUpperCase())}</span>${esc(r.name)}</div></div>`).join("");
}
function paintStars(n) { document.querySelectorAll("#starsInput span").forEach((s) => s.classList.toggle("on", +s.dataset.v <= n)); }
$("#starsInput").onclick = (e) => { const s = e.target.closest("span"); if (s) { rating = +s.dataset.v; paintStars(rating); } };
$("#starsInput").onmouseover = (e) => { const s = e.target.closest("span"); if (s) paintStars(+s.dataset.v); };
$("#starsInput").onmouseleave = () => paintStars(rating);
$("#reviewForm").onsubmit = (e) => {
  e.preventDefault();
  if (!rating) { alert("Please select a star rating."); return; }
  const list = store.get("reviews", []);
  list.unshift({ name: $("#rName").value.trim(), rating, text: $("#rText").value.trim() });
  store.set("reviews", list); e.target.reset(); rating = 0; paintStars(0); renderReviews();
  showModal("Thank you! 💛", "Your review has been added.");
};

/* ============ BRANCHES & MAP ============ */
function setMap(b) {
  $("#mapFrame").src = `https://www.google.com/maps?q=${encodeURIComponent(b.map)}&output=embed`;
  $("#mapLabel").textContent = `${b.name} — ${b.address}`;
}
function renderBranches() {
  $("#branchGrid").innerHTML = BRANCHES.map((b) => `
    <div class="branch"><h3>📍 ${b.name}</h3><p>${b.address}</p><p>📞 ${b.phone}</p><p>🕒 ${b.hours}</p>
      <div class="acts">
        <button data-act="map" data-id="${b.id}">View on map</button>
        <button data-act="book" data-id="${b.id}">Book here</button>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(b.map)}" target="_blank" rel="noopener">Directions</a>
        <a href="tel:${b.phone.replace(/\s/g, "")}">Call</a>
      </div></div>`).join("");
  const opts = BRANCHES.map((b) => `<option value="${b.id}">${b.name}</option>`).join("");
  branchEl.innerHTML = opts; $("#oBranch").innerHTML = opts;
}
$("#branchGrid").onclick = (e) => {
  const b = e.target.closest("button[data-act]"); if (!b) return;
  const br = BRANCHES.find((x) => x.id === b.dataset.id);
  if (b.dataset.act === "map") { setMap(br); $("#location").scrollIntoView(); }
  else { branchEl.value = br.id; renderFloor(); $("#book").scrollIntoView(); }
};
branchEl.addEventListener("change", () => setMap(BRANCHES.find((b) => b.id === branchEl.value)));

/* ============ MODAL ============ */
function showModal(title, text) { $("#modalTitle").textContent = title; $("#modalText").textContent = text; $("#modal").classList.add("show"); }
$("#modalClose").onclick = () => $("#modal").classList.remove("show");
$("#modal").onclick = (e) => { if (e.target.id === "modal") $("#modal").classList.remove("show"); };

/* ============ INIT ============ */
renderFilters(); renderMenu(); renderBranches(); renderCart();
renderFloor(); renderBookings(); renderReviews(); setMap(BRANCHES[0]);
