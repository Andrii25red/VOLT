
const PRODUCTS = [

  { cat: 'audio', type: 'Бездротові навушники', name: 'Aura',        price: 4299,  img: 'aura.jpg' },
  { cat: 'audio', type: 'Портативна колонка',   name: 'Pulse Mini',  price: 1899,  img: 'pulse-mini.jpg' },
  { cat: 'audio', type: 'TWS-навушники',        name: 'Echo Buds',   price: 2499,  img: 'echo-buds.jpg' },

  { cat: 'cameras', type: 'Екшн-камера',        name: 'Motion 4K',   price: 7999,  img: 'motion-4k.jpg' },
  { cat: 'cameras', type: 'Бездзеркальна камера', name: 'Frame X',   price: 32999, img: 'frame-x.jpg' },
  { cat: 'cameras', type: 'Камера миттєвого друку', name: 'Snap',    price: 3499,  img: 'snap.jpg' },

  { cat: 'phones', type: 'Смартфон',            name: 'Nova 12',     price: 18999, img: 'nova-12.jpg' },
  { cat: 'phones', type: 'Смартфон',            name: 'Nova 12 Lite', price: 11499, img: 'nova-12-lite.jpg' },
  { cat: 'phones', type: 'Смартфон-розкладачка', name: 'Fold Air',   price: 39999, img: 'fold-air.jpg' },

  { cat: 'laptops', type: 'Ультрабук',          name: 'Slate 14',    price: 42999, img: 'slate-14.jpg' },
  { cat: 'laptops', type: 'Ігровий ноутбук',    name: 'Rift 16',     price: 58999, img: 'rift-16.jpg' },
  { cat: 'laptops', type: 'Ноутбук',            name: 'Study 15',    price: 21999, img: 'study-15.jpg' },
  { cat: 'tablets', type: 'Планшет',            name: 'Canvas 11',   price: 15999, img: 'canvas-11.jpg' },
  { cat: 'tablets', type: 'Планшет',            name: 'Canvas Mini', price: 9999,  img: 'canvas-mini.jpg' },
  { cat: 'tablets', type: 'Електронна книга',   name: 'Paper',       price: 5499,  img: 'paper.jpg' },
  { cat: 'watches', type: 'Смарт-годинник',     name: 'Orbit',       price: 8999,  img: 'orbit.jpg' },
  { cat: 'watches', type: 'Фітнес-браслет',     name: 'Stride',      price: 1999,  img: 'stride.jpg' },
  { cat: 'watches', type: 'Спортивний годинник', name: 'Trail Pro',  price: 12999, img: 'trail-pro.jpg' },
  { cat: 'games', type: 'Ігрова консоль',       name: 'Arc',         price: 19999, img: 'arc.jpg' },
  { cat: 'games', type: 'Геймпад',              name: 'Grip',        price: 2299,  img: 'grip.jpg' },
  { cat: 'games', type: 'Портативна консоль',   name: 'Arc Go',      price: 13999, img: 'arc-go.jpg' },
  { cat: 'accessories', type: 'Павербанк',      name: 'Charge 20',   price: 1499,  img: 'charge-20.jpg' },
  { cat: 'accessories', type: 'Бездротова зарядка', name: 'Pad',     price: 999,   img: 'pad.jpg' },
  { cat: 'accessories', type: 'Хаб USB-C',      name: 'Link 7-in-1', price: 1299,  img: 'link.jpg' },
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

$('cartBtn').addEventListener('click', () => {
  const cart = loadCart();
  const ids = Object.keys(cart);
  if (!ids.length) return showToast('Кошик поки порожній');
  const sum = ids.reduce((s, id) => s + PRODUCTS[id].price * cart[id], 0);
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  showToast(`У кошику ${plural(count)} на ${formatPrice(sum)}`);
});

renderCards();
updateCartCount();
