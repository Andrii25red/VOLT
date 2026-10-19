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