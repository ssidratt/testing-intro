function validateQuantity(quantity, stock) {
  if (!Number.isInteger(quantity) || quantity <= 0 || quantity > stock) {
    throw new RangeError('Количество должно быть положительным и не превышать остаток');
  }
}

function addToCart(cart, product, quantity) {
  const existing = cart.find((item) => item.id === product.id);
  const nextQuantity = (existing ? existing.quantity : 0) + quantity;
  validateQuantity(quantity, product.stock);
  validateQuantity(nextQuantity, product.stock);
  if (existing) {
    return cart.map((item) => item.id === product.id ? { ...item, quantity: nextQuantity } : item);
  }
  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, productId, quantity) {
  const existing = cart.find((item) => item.id === productId);
  if (!existing) return [...cart];
  validateQuantity(quantity, existing.stock);
  return cart.map((item) => item.id === productId ? { ...item, quantity } : item);
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoCode = '') {
  const subtotal = calculateCartSubtotal(cart);
  const discount = promoCode === 'SAVE10' && subtotal >= 20000 ? Math.round(subtotal * 0.1) : 0;
  const delivery = subtotal >= 50000 ? 0 : 30000;
  return { subtotal, discount, delivery, total: subtotal - discount + delivery };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
