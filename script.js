
const PRODUCTS = [

  { cat: 'audio', type: 'Бездротові навушники', name: 'Aura',        price: 4299,  img: 'headphones.jpg' },
  { cat: 'audio', type: 'Портативна колонка',   name: 'Pulse Mini',  price: 1899,  img: 'speaker.jpg' },
  { cat: 'audio', type: 'TWS-навушники',        name: 'Echo Buds',   price: 2499,  img: 'headphones1.jpg' },

  { cat: 'cameras', type: 'Екшн-камера',        name: 'Motion 4K',   price: 7999,  img: 'action-camera.jpg' },
  { cat: 'cameras', type: 'Бездзеркальна камера', name: 'Frame X',   price: 32999, img: 'camera.jpg' },
  { cat: 'cameras', type: 'Камера миттєвого друку', name: 'Snap',    price: 3499,  img: 'camera1.jpg' },

  { cat: 'phones', type: 'Смартфон',            name: 'Nova 12',     price: 18999, img: 'phone.jpg' },
  { cat: 'phones', type: 'Смартфон',            name: 'Nova 12 Lite', price: 11499, img: 'phone1.jpg' },
  { cat: 'phones', type: 'Смартфон-міні',       name: 'Mini',   price: 39999, img: 'phone2.jpg' },

  { cat: 'laptops', type: 'Ультрабук',          name: 'Slate 14',    price: 42999, img: 'computer.jpg' },
  { cat: 'laptops', type: 'Ігровий ноутбук',    name: 'Rift 16',     price: 58999, img: 'computer1.jpg' },
  { cat: 'laptops', type: 'Ноутбук',            name: 'Study 15',    price: 21999, img: 'computer2.jpg' },
  { cat: 'tablets', type: 'Планшет',            name: 'Canvas 11',   price: 15999, img: 'tablet.jpg' },
  { cat: 'tablets', type: 'Планшет',            name: 'Canvas Mini', price: 9999,  img: 'tablet1.jpg' },
  { cat: 'tablets', type: 'Електронна книга',   name: 'Paper',       price: 5499,  img: 'tablet2.jpg' },
  { cat: 'watches', type: 'Смарт-годинник',     name: 'Orbit',       price: 8999,  img: 'smart-watch.jpg' },
  { cat: 'watches', type: 'Фітнес-браслет',     name: 'Stride',      price: 1999,  img: 'smart-watch1.jpg' },
  { cat: 'watches', type: 'Спортивний годинник', name: 'Trail Pro',  price: 12999, img: 'smart-watch2.jpg' },
  { cat: 'games', type: 'Ігрова консоль',       name: 'Arc',         price: 19999, img: 'console.jpg' },
  { cat: 'games', type: 'Геймпад',              name: 'Grip',        price: 2299,  img: 'gamepad.jpg' },
  { cat: 'games', type: 'Геймпад',              name: 'Arc Go',      price: 13999, img: 'gamepad1.jpg' },
  { cat: 'accessories', type: 'Павербанк',      name: 'Charge 20',   price: 1499,  img: 'charger1.jpg' },
  { cat: 'accessories', type: 'Бездротова зарядка', name: 'Pad',     price: 999,   img: 'charger.jpg' },
  { cat: 'accessories', type: 'Клавіатура',      name: 'Type 65',    price: 1299,  img: 'keyboard.jpg' },
];

const CATEGORY_NAMES = {
  audio: 'Аудіо', cameras: 'Камери', phones: 'Смартфони', laptops: 'Ноутбуки',
  tablets: 'Планшети', watches: 'Годинники', games: 'Ігри', accessories: 'Аксесуари',
};

const ICONS = {
  audio: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="5" height="7" rx="2"/><rect x="16" y="14" width="5" height="7" rx="2"/>',
  cameras: '<rect x="2" y="7" width="20" height="14" rx="3"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="14" r="4"/>',
  phones: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  laptops: '<rect x="4" y="4" width="16" height="11" rx="2"/><path d="M2 19h20"/>',
  tablets: '<rect x="4" y="2" width="16" height="20" rx="3"/><circle cx="12" cy="18.5" r=".6"/>',
  watches: '<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 6l1-4h4l1 4M9 18l1 4h4l1-4M12 10v2.5l1.5 1"/>',
  games: '<path d="M6 8h12a4 4 0 0 1 4 4v1a4 4 0 0 1-7 2.6l-.6-.6H9.6l-.6.6A4 4 0 0 1 2 13v-1a4 4 0 0 1 4-4z"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r=".6"/><circle cx="18" cy="13.5" r=".6"/>',
  accessories: '<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M22 11v2M10 9.5L8 12h3l-2 2.5"/>',
};


const $ = id => document.getElementById(id);
const formatPrice = n => n.toLocaleString('uk-UA') + ' ₴';

function plural(n) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} товар`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} товари`;
  return `${n} товарів`;
}

const BAG_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L20 8H6.2"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>';

function renderCards(filter = 'all') {
  const list = PRODUCTS
    .map((p, i) => ({ ...p, id: i }))
    .filter(p => filter === 'all' || p.cat === filter);

  $('count').textContent = plural(list.length);

  if (!list.length) {
    $('grid').innerHTML = '<p class="empty">У цій категорії поки немає товарів.</p>';
    return;
  }

  $('grid').innerHTML = list.map((p, k) => `
    <article class="card" style="animation-delay:${k * 40}ms">
      <div class="card__head">
        <h3 class="card__title"><b>${p.type}</b> ${p.name}</h3>
        <span class="card__num">${String(p.id + 1).padStart(2, '0')}</span>
      </div>
      <div class="card__media">
        <svg class="card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.cat]}</svg>
        <img src="images/${p.img}" alt="${p.type} ${p.name}" loading="lazy" onerror="this.remove()">
      </div>
      <div class="card__foot">
        <div>
          <span class="card__cat">${CATEGORY_NAMES[p.cat]}</span>
          <span class="price">${formatPrice(p.price)}</span>
        </div>
        <button class="add-btn" data-id="${p.id}">${BAG_ICON}До кошика</button>
      </div>
    </article>`).join('');
}

$('filters').addEventListener('click', e => {
  const chip = e.target.closest('[data-filter]');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('chip--active', c === chip));
  renderCards(chip.dataset.filter);
});

const CART_KEY = 'volt_cart';
function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (e) { return {}; }
}
function saveCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}
function updateCartCount() {
  const total = Object.values(loadCart()).reduce((a, b) => a + b, 0);
  $('cartCount').textContent = total;
  $('cartCount').hidden = total === 0;
}

let toastTimer;
function showToast(text) {
  const t = $('toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function cartEntries() {
  const cart = loadCart();
  return Object.keys(cart)
    .map(id => ({ id, product: PRODUCTS[id], qty: cart[id] }))
    .filter(item => item.product && item.qty > 0);
}

function cartTotals() {
  const items = cartEntries();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const sum = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  return { items, count, sum };
}

function setQty(id, qty) {
  const cart = loadCart();
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  saveCart(cart);
  updateCartCount();
  renderCart();
}

function productThumb(p) {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.cat]}</svg>
    <img src="images/${p.img}" alt="" onerror="this.remove()">`;
}

let cartScreen = 'list';

function renderCart() {
  const body = $('cartBody');
  if (!body) return;

  if (cartScreen === 'success') {
    body.innerHTML = `
      <div class="cart-success">
        <h3>Замовлення прийнято</h3>
        <p>Дякуємо! Ми зателефонуємо, щоб підтвердити доставку.</p>
        <button class="add-btn btn-block" data-cart-action="close">На головну</button>
      </div>`;
    return;
  }

  const { items, count, sum } = cartTotals();

  if (cartScreen === 'checkout') {
    if (!items.length) {
      cartScreen = 'list';
    } else {
      body.innerHTML = `
        <form class="checkout" id="checkoutForm">
          <label>Ім’я
            <input name="name" type="text" required autocomplete="name" placeholder="Марія Коваль">
          </label>
          <label>Телефон
            <input name="phone" type="tel" required autocomplete="tel" placeholder="+380 00 000 00 00">
          </label>
          <label>Місто та відділення
            <textarea name="address" required placeholder="Київ, Нова Пошта №12"></textarea>
          </label>
          <div class="cart-summary__row">
            <span>До сплати</span>
            <b>${formatPrice(sum)}</b>
          </div>
          <div class="checkout__actions">
            <button class="add-btn btn-block" type="submit">Підтвердити замовлення</button>
            <button class="btn-ghost" type="button" data-cart-action="back">Назад до кошика</button>
          </div>
        </form>`;
      return;
    }
  }

  if (!items.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <p>Кошик поки порожній.</p>
        <button class="add-btn" data-cart-action="close">До каталогу</button>
      </div>`;
    return;
  }

  body.innerHTML = `
    <ul class="cart-list">
      ${items.map(({ id, product: p, qty }) => `
        <li class="cart-item">
          <div class="cart-item__media">${productThumb(p)}</div>
          <div class="cart-item__info">
            <span class="cart-item__type">${p.type}</span>
            <span class="cart-item__name">${p.name}</span>
            <div class="cart-item__row">
              <div class="qty">
                <button type="button" data-qty="${id}" data-delta="-1" aria-label="Менше">−</button>
                <span>${qty}</span>
                <button type="button" data-qty="${id}" data-delta="1" aria-label="Більше">+</button>
              </div>
              <span class="cart-item__price">${formatPrice(p.price * qty)}</span>
            </div>
            <button class="cart-item__remove" type="button" data-remove="${id}">Прибрати</button>
          </div>
        </li>`).join('')}
    </ul>
    <div class="cart-summary">
      <div class="cart-summary__row">
        <span>${plural(count)}</span>
        <b>${formatPrice(sum)}</b>
      </div>
      <button class="add-btn btn-block" data-cart-action="checkout">Оформити замовлення</button>
    </div>`;
}

function openCart() {
  cartScreen = 'list';
  renderCart();
  const overlay = $('cartOverlay');
  const drawer = $('cartDrawer');
  overlay.hidden = false;
  drawer.hidden = false;
  requestAnimationFrame(() => {
    overlay.classList.add('is-open');
    drawer.classList.add('is-open');
  });
  document.body.classList.add('cart-open');
  $('cartClose').focus();
}

function closeCart() {
  const overlay = $('cartOverlay');
  const drawer = $('cartDrawer');
  overlay.classList.remove('is-open');
  drawer.classList.remove('is-open');
  document.body.classList.remove('cart-open');
  setTimeout(() => {
    overlay.hidden = true;
    drawer.hidden = true;
    cartScreen = 'list';
  }, 280);
  $('cartBtn').focus();
}

$('grid').addEventListener('click', e => {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;
  const p = PRODUCTS[btn.dataset.id];
  const cart = loadCart();
  cart[btn.dataset.id] = (cart[btn.dataset.id] || 0) + 1;
  saveCart(cart);
  updateCartCount();

  btn.classList.add('added');
  btn.innerHTML = '✓ Додано';
  setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = BAG_ICON + 'До кошика'; }, 1200);

  const cartBtn = $('cartBtn');
  cartBtn.classList.remove('bump'); void cartBtn.offsetWidth; cartBtn.classList.add('bump');
  showToast(`${p.type} ${p.name} — у кошику`);
});

$('cartBtn').addEventListener('click', openCart);
$('cartClose').addEventListener('click', closeCart);
$('cartOverlay').addEventListener('click', closeCart);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.body.classList.contains('cart-open')) closeCart();
});

$('cartBody').addEventListener('click', e => {
  const qtyBtn = e.target.closest('[data-qty]');
  if (qtyBtn) {
    const id = qtyBtn.dataset.qty;
    const cart = loadCart();
    setQty(id, (cart[id] || 0) + Number(qtyBtn.dataset.delta));
    return;
  }
  const removeBtn = e.target.closest('[data-remove]');
  if (removeBtn) {
    setQty(removeBtn.dataset.remove, 0);
    return;
  }
  const action = e.target.closest('[data-cart-action]');
  if (!action) return;
  if (action.dataset.cartAction === 'close') closeCart();
  if (action.dataset.cartAction === 'checkout') {
    cartScreen = 'checkout';
    renderCart();
  }
  if (action.dataset.cartAction === 'back') {
    cartScreen = 'list';
    renderCart();
  }
});

$('cartBody').addEventListener('submit', e => {
  if (e.target.id !== 'checkoutForm') return;
  e.preventDefault();
  saveCart({});
  updateCartCount();
  cartScreen = 'success';
  renderCart();
});

renderCards();
updateCartCount();

