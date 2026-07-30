/* ============================================ */
/*  FITFORGE — Main Application                  */
/*  Products · Cart · Filters · Trends · Bot    */
/* ============================================ */

// =============================================
// DATA
// =============================================

const PRODUCTS = [
  {
    id: 1, name: 'Pro Resistance Bands Set', category: 'gear',
    emoji: '🏋️', price: 34.99, originalPrice: null,
    badge: 'trending', badgeText: '🔥 Hot',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop&q=80',
    desc: '5-level resistance bands with non-slip nylon. Perfect for home workouts, rehab, and strength training.',
    specs: ['5 levels (10-50 lbs)', 'Non-slip design', 'Carry bag included', 'Door anchor included'],
    variantLabel: 'Level', variants: ['Light', 'Medium', 'Heavy', 'X-Heavy', 'Pro Set']
  },
  {
    id: 2, name: 'Smart Jump Rope', category: 'gear',
    emoji: '⏳', price: 49.99, originalPrice: 69.99,
    badge: 'sale', badgeText: '-28%',
    image: 'https://images.unsplash.com/photo-1598714549948-9e8f2e3bcd47?w=400&h=400&fit=crop&q=80',
    desc: 'Bluetooth-connected jump rope with real-time count, calories, and workout tracking.',
    specs: ['Bluetooth 5.0', 'LED counter', 'Silicone grips', 'USB-C charging'],
    variantLabel: 'Color', variants: ['Black', 'Teal', 'Pink']
  },
  {
    id: 3, name: 'Organic Plant Protein', category: 'supplements',
    emoji: '🥤', price: 44.99, originalPrice: 54.99,
    badge: 'trending', badgeText: '🌱 Vegan',
    image: 'https://images.unsplash.com/photo-1622485830543-773c4abc3e4c?w=400&h=400&fit=crop&q=80',
    desc: '30g plant-based protein per serving. Pea, hemp, and brown rice blend. No artificial sweeteners.',
    specs: ['30g protein/serving', '5g BCAAs', 'No artificial sweeteners', 'Vanilla & Chocolate'],
    variantLabel: 'Flavor', variants: ['Vanilla', 'Chocolate', 'Strawberry', 'Unflavored']
  },
  {
    id: 4, name: 'Theragun Mini 2.0', category: 'recovery',
    emoji: '🔫', price: 199.99, originalPrice: 249.99,
    badge: 'sale', badgeText: '⚡ Sale',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80',
    desc: 'Ultra-portable percussion massage gun with 3 speeds and QuietForce technology.',
    specs: ['3 speed settings', 'QuietForce Tech', 'USB-C charging', '6h battery life'],
    variantLabel: 'Model', variants: ['Standard', 'Pro']
  },
  {
    id: 5, name: 'Hypoallergenic Yoga Mat', category: 'gear',
    emoji: '🧘', price: 59.99, originalPrice: null,
    badge: 'new', badgeText: 'New',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop&q=80',
    desc: '6mm thick eco-friendly TPE yoga mat with alignment lines. Non-slip, antimicrobial.',
    specs: ['6mm thickness', 'Alignment lines', 'Antimicrobial', 'Eco-friendly TPE'],
    variantLabel: 'Color', variants: ['Ocean Blue', 'Charcoal', 'Lavender', 'Sage Green']
  },
  {
    id: 6, name: 'Hydration Electrolyte Pack', category: 'supplements',
    emoji: '💧', price: 24.99, originalPrice: null,
    badge: null, badgeText: null,
    image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&h=400&fit=crop&q=80',
    desc: 'Zero-sugar electrolyte packets with essential minerals. 12-pack, drink mix.',
    specs: ['Zero sugar', '12 packets', '500mg electrolytes', 'Vitamin C + Zinc'],
    variantLabel: 'Flavor', variants: ['Lemon Lime', 'Berry', 'Orange', 'Tropical']
  },
  {
    id: 7, name: 'Compression Recovery Boots', category: 'recovery',
    emoji: '🦵', price: 299.99, originalPrice: 379.99,
    badge: 'sale', badgeText: '🔥 Sale',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=400&fit=crop&q=80',
    desc: 'Full-leg air compression system for accelerated recovery. 4 modes, 3 intensities.',
    specs: ['4 massage modes', '3 intensity levels', 'Full-leg coverage', 'Rechargeable'],
    variantLabel: 'Size', variants: ['S/M', 'L/XL']
  },
  {
    id: 8, name: '8-Week HIIT Program (Digital)', category: 'digital',
    emoji: '📱', price: 29.99, originalPrice: 49.99,
    badge: 'trending', badgeText: '📈 Trending',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=400&fit=crop&q=80',
    desc: 'Progressive HIIT training program. Video demos, PDF workouts, tracking sheets.',
    specs: ['8 weeks', '24 workouts', 'Video demos', 'PDF + tracking sheets'],
    variantLabel: 'Level', variants: ['Beginner', 'Intermediate', 'Advanced']
  },
  {
    id: 9, name: 'Seamless Gym Leggings', category: 'apparel',
    emoji: '👖', price: 54.99, originalPrice: null,
    badge: 'new', badgeText: '✨ New',
    image: 'https://images.unsplash.com/photo-1591946600619-1b0c6b0e7b0c?w=400&h=400&fit=crop&q=80',
    desc: 'High-waist seamless compression leggings. Moisture-wicking, squat-proof.',
    specs: ['High-waist', 'Squat-proof', 'Moisture-wicking', '4-way stretch'],
    variantLabel: 'Size', variants: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 10, name: 'Foam Roller Pro', category: 'recovery',
    emoji: '🔄', price: 39.99, originalPrice: null,
    badge: null, badgeText: null,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&q=80',
    desc: 'High-density foam roller with textured surface for deep tissue release. 18" length.',
    specs: ['18" length', 'High-density', 'Textured surface', 'Hollow core'],
    variantLabel: 'Density', variants: ['Standard', 'Firm', 'Extra Firm']
  }
];

const TRENDS = [
  { id: 1, icon: '🏋️', tag: 'Training', image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=300&fit=crop&q=80', title: 'Hybrid Training is Taking Over', desc: 'The old "cardio vs. weights" debate is dead.', date: 'Jul 28, 2026', readTime: '4 min read' },
  { id: 2, icon: '🧠', tag: 'Wellness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=300&fit=crop&q=80', title: 'Biohacking for the Everyday Athlete', desc: 'Cold plunges, red light therapy, and breathwork.', date: 'Jul 25, 2026', readTime: '5 min read' },
  { id: 3, icon: '🌱', tag: 'Nutrition', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=300&fit=crop&q=80', title: 'Plant-Based Performance Gains', desc: 'More athletes are going plant-based.', date: 'Jul 22, 2026', readTime: '6 min read' },
  { id: 4, icon: '📱', tag: 'Tech', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop&q=80', title: 'AI-Powered Workout Plans', desc: 'AI coaching apps generating hyper-personalized plans.', date: 'Jul 19, 2026', readTime: '3 min read' },
  { id: 5, icon: '🧘', tag: 'Recovery', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop&q=80', title: 'The Recovery Revolution', desc: 'Recovery is where the gains happen.', date: 'Jul 16, 2026', readTime: '4 min read' },
  { id: 6, icon: '🔥', tag: 'Trending', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=300&fit=crop&q=80', title: '75-Day Challenges: Fad or Future?', desc: 'Structured transformation challenges everywhere.', date: 'Jul 13, 2026', readTime: '5 min read' }
];
const CATEGORIES = [
  { icon: '🏋️', name: 'Gear', desc: 'Resistance bands, mats, ropes & more', filter: 'gear' },
  { icon: '🥤', name: 'Supplements', desc: 'Protein, electrolytes & recovery', filter: 'supplements' },
  { icon: '🔄', name: 'Recovery', desc: 'Massage guns, rollers & boots', filter: 'recovery' },
  { icon: '📱', name: 'Digital', desc: 'Programs, planners & guides', filter: 'digital' },
  { icon: '👕', name: 'Apparel', desc: 'Performance gear for every workout', filter: 'apparel' }
];

let cart = JSON.parse(localStorage.getItem('fitforge_cart') || '[]');
function saveCart() { localStorage.setItem('fitforge_cart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount() { const count = cart.reduce((s, i) => s + i.qty, 0); document.querySelectorAll('#cartCount').forEach(el => { el.textContent = count; }); }
function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function addToCart(productId, variant, qty) { if (!qty) qty = 1; const product = PRODUCTS.find(p => p.id === productId); if (!product) return; const existing = cart.find(i => i.productId === productId && i.variant === variant); if (existing) { existing.qty += qty; } else { cart.push({ productId, variant, qty, name: product.name, price: product.price, emoji: product.emoji, image: product.image }); } saveCart(); showToast('Added ' + product.name + ' to cart', '✅'); }
function removeFromCart(index) { cart.splice(index, 1); saveCart(); renderCart(); }
function updateQty(index, delta) { cart[index].qty = Math.max(1, cart[index].qty + delta); saveCart(); renderCart(); }

function renderCart() { const container = document.getElementById('cartItems'); if (!container) return; if (cart.length === 0) { container.innerHTML = '<div class="empty-state"><div class="empty-icon">🛒</div><h3>Your cart is empty</h3><p>Time to forge those gains!</p><a href="shop.html" class="btn btn-primary">Shop Now</a></div>'; const s = document.querySelector('.cart-summary'); if (s) s.style.display = 'none'; return; } const s = document.querySelector('.cart-summary'); if (s) s.style.removeProperty('display'); container.innerHTML = cart.map((item, i) => '<div class="cart-item"><div class="cart-item-image" style="background-image:url(' + item.image + ');background-size:cover;background-position:center"></div><div class="cart-item-info"><h3>' + item.name + '</h3><p>' + item.variant + ' $' + item.price.toFixed(2) + '</p></div><div class="cart-item-actions"><div class="qty-controls"><button class="qty-btn" onclick="updateQty(' + i + ',-1)">-</button><span class="qty-value">' + item.qty + '</span><button class="qty-btn" onclick="updateQty(' + i + ',1)">+</button></div><span class="cart-item-total">$' + (item.price * item.qty).toFixed(2) + '</span><button class="cart-item-remove" onclick="removeFromCart(' + i + ')">X</button></div></div>').join(''); updateSummary(); }

function updateSummary() { const sub = getCartTotal(); const ship = sub >= 50 ? 0 : 5.99; const total = sub + ship; const el = function(id) { return document.getElementById(id); }; if (el('summarySubtotal')) el('summarySubtotal').textContent = '$' + sub.toFixed(2); if (el('summaryShipping')) el('summaryShipping').textContent = ship === 0 ? 'Free' : '$' + ship.toFixed(2); if (el('summaryTotal')) el('summaryTotal').textContent = '$' + total.toFixed(2); if (el('checkoutSubtotal')) el('checkoutSubtotal').textContent = '$' + sub.toFixed(2); if (el('checkoutShipping')) el('checkoutShipping').textContent = ship === 0 ? 'Free' : '$' + ship.toFixed(2); if (el('checkoutTotal')) el('checkoutTotal').textContent = '$' + total.toFixed(2); const ci = document.getElementById('checkoutItems'); if (ci) { ci.innerHTML = cart.map(function(item) { return '<div class="summary-row"><span>' + item.emoji + ' ' + item.name + ' x ' + item.qty + '</span><span>$' + (item.price * item.qty).toFixed(2) + '</span></div>'; }).join(''); } }

function renderProducts(containerId, products) { const container = document.getElementById(containerId); if (!container) return; if (!products || products.length === 0) { container.innerHTML = '<div class="empty-state"><h3>No products found</h3></div>'; return; } container.innerHTML = products.map(function(p) { var badge = p.badge ? '<span class="product-badge badge-' + p.badge + '">' + p.badgeText + '</span>' : ''; var original = p.originalPrice ? '<span class="original">$' + p.originalPrice.toFixed(2) + '</span>' : ''; return '<div class="product-card" onclick="window.location.href=' + "'product.html?id=" + p.id + "'" + '"><div class="product-image" style="background-image:url(' + p.image + ');background-size:cover;background-position:center">' + badge + '<div class="product-image-overlay"></div></div><div class="product-info"><div class="product-category">' + p.category + '</div><div class="product-name">' + p.name + '</div><div class="product-description">' + p.desc + '</div><div class="product-footer"><span class="product-price">$' + p.price.toFixed(2) + ' ' + original + '</span><button class="add-to-cart" onclick="event.stopPropagation();addToCart(' + p.id + ",'" + p.variants[0] + "')" + '">Add to Cart</button></div></div></div>'; }).join(''); }

function renderTrends(containerId, trends) { var container = document.getElementById(containerId); if (!container) return; container.innerHTML = trends.map(function(t) { return '<div class="trend-card"><div class="trend-image" style="background-image:url(' + t.image + ');background-size:cover;background-position:center"></div><div class="trend-content"><span class="trend-tag">' + t.tag + '</span><h3>' + t.title + '</h3><p>' + t.desc + '</p></div></div>'; }).join(''); }

function renderCategories(containerId) { var container = document.getElementById(containerId); if (!container) return; container.innerHTML = CATEGORIES.map(function(c) { return '<div class="category-card" onclick="window.location.href=' + "'shop.html?filter=" + c.filter + "'" + '"><div class="cat-icon">' + c.icon + '</div><h3>' + c.name + '</h3><p>' + c.desc + '</p></div>'; }).join(''); }

function initShopFilters() { var filterBtns = document.querySelectorAll('.filter-btn'); if (!filterBtns.length) return; var params = new URLSearchParams(window.location.search); var urlFilter = params.get('filter'); if (urlFilter) { filterBtns.forEach(function(b) { b.classList.remove('active'); }); var match = document.querySelector('.filter-btn[data-filter="' + urlFilter + '"]'); if (match) match.classList.add('active'); } filterBtns.forEach(function(btn) { btn.addEventListener('click', function() { filterBtns.forEach(function(b) { b.classList.remove('active'); }); btn.classList.add('active'); var filter = btn.dataset.filter; renderProducts('shopProducts', filter === 'all' ? PRODUCTS : PRODUCTS.filter(function(p) { return p.category === filter; })); window.history.replaceState(null, '', '?filter=' + filter); }); }); var activeFilter = document.querySelector('.filter-btn.active'); if (activeFilter) { var filter = activeFilter.dataset.filter; renderProducts('shopProducts', filter === 'all' ? PRODUCTS : PRODUCTS.filter(function(p) { return p.category === filter; })); } }

function renderProductDetail() { var container = document.getElementById('productDetailGrid'); if (!container) return; var params = new URLSearchParams(window.location.search); var id = parseInt(params.get('id')); var product = PRODUCTS.find(function(p) { return p.id === id; }); if (!product) { container.innerHTML = '<div class="empty-state"><h3>Product not found</h3><a href="shop.html" class="btn btn-primary">Back to Shop</a></div>'; return; } var original = product.originalPrice ? '<span class="original">$' + product.originalPrice.toFixed(2) + '</span>' : ''; var specs = product.specs.map(function(s) { return '<li>' + s + '</li>'; }).join(''); var variants = product.variants.map(function(v, i) { return '<button class="variant-option' + (i === 0 ? ' active' : '') + '" data-variant="' + v + '" onclick="selectVariant(this,' + "'" + v + "'" + ')">' + v + '</button>'; }).join(''); container.innerHTML = '<div class="product-detail-image" style="background-image:url(' + product.image + ');background-size:cover;background-position:center"></div><div class="product-detail-info"><div class="product-category">' + product.category + '</div><h1>' + product.name + '</h1><div class="product-price">$' + product.price.toFixed(2) + ' ' + original + '</div><p class="product-detail-desc">' + product.desc + '</p><div class="product-variants"><h4>' + product.variantLabel + '</h4><div class="variant-options">' + variants + '</div></div><ul>' + specs + '</ul><div class="product-detail-actions"><button class="btn btn-primary" onclick="addToCart(' + product.id + ', selectedVariant || ' + "'" + product.variants[0] + "'" + ')">Add to Cart $' + product.price.toFixed(2) + '</button><button class="btn btn-secondary" onclick="window.location.href=' + "'shop.html'" + '">Back</button></div></div>'; window.selectedVariant = product.variants[0]; }

var selectedVariant = null;
function selectVariant(el, variant) { document.querySelectorAll('.variant-option').forEach(function(b) { b.classList.remove('active'); }); el.classList.add('active'); selectedVariant = variant; }

function handleCheckout(e) { e.preventDefault(); if (cart.length === 0) { showToast('Your cart is empty!', 'X'); return; } var orderId = 'FF-' + Date.now().toString(36).toUpperCase(); cart = []; saveCart(); document.querySelector('.checkout-layout').innerHTML = '<div class="empty-state" style="grid-column:1/-1"><h3>Order Placed! #' + orderId + '</h3><p>Confirmation sent.</p><a href="shop.html" class="btn btn-primary">Continue Shopping</a></div>'; showToast('Order #' + orderId + ' placed!', 'Party'); }

function showToast(message, icon) { var container = document.getElementById('toastContainer'); if (!container) return; var toast = document.createElement('div'); toast.className = 'toast success'; toast.innerHTML = '<span>' + (icon || 'OK') + '</span><span>' + message + '</span>'; container.appendChild(toast); setTimeout(function() { toast.classList.add('fade-out'); setTimeout(function() { toast.remove(); }, 300); }, 2500); }

function testBot() { showToast('Bot ping successful!', 'Bot'); }

function showBotInfo() { var overlay = document.createElement('div'); overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:3000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)'; overlay.onclick = function(e) { if (e.target === overlay) overlay.remove(); }; overlay.innerHTML = '<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:40px;max-width:480px;width:90%;position:relative"><button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:16px;right:16px;background:none;border:none;color:var(--text-muted);font-size:1.5rem;cursor:pointer">X</button><div style="text-align:center;margin-bottom:24px"><div style="font-size:3rem;margin-bottom:12px">Bot</div><h2>Telegram Bot Management</h2></div><div style="display:flex;flex-direction:column;gap:16px"><div style="display:flex;gap:12px;align-items:start"><span style="font-size:1.5rem">Cart</span><div><strong>Order Notifications</strong><br><span style="color:var(--text-secondary);font-size:0.85rem">Every new order sent to your Telegram bot.</span></div></div></div><div style="margin-top:24px;text-align:center"><a href="https://t.me/botfather" target="_blank" class="btn btn-primary btn-sm">Create Your Bot</a></div></div>'; document.body.appendChild(overlay); }

function toggleMobileMenu() { var links = document.getElementById('navLinks'); if (!links) return; links.classList.toggle('open'); if (links.classList.contains('open')) { links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:rgba(10,10,15,0.98);padding:24px;gap:20px;border-bottom:1px solid var(--border);z-index:999'; } else { links.style.cssText = ''; } }

function initNavbar() { var navbar = document.getElementById('navbar'); if (!navbar) return; window.addEventListener('scroll', function() { navbar.classList.toggle('scrolled', window.scrollY > 50); }); }

document.addEventListener('DOMContentLoaded', function() { updateCartCount(); initNavbar(); renderCategories('categoriesGrid'); renderProducts('featuredProducts', PRODUCTS.filter(function(p) { return p.badge === 'trending' || p.badge === 'sale'; }).slice(0, 4)); renderTrends('trendsGrid', TRENDS.slice(0, 3)); initShopFilters(); renderProductDetail(); renderCart(); renderTrends('allTrends', TRENDS); document.querySelectorAll('#botInfoLink, #footerBotLink').forEach(function(el) { if (el) el.addEventListener('click', function(e) { e.preventDefault(); showBotInfo(); }); }); });

// Additional products 11-15 added to PRODUCTS array
const extraProducts = [
  { id: 11, name: 'Meal Prep Planner (Digital)', category: 'digital', emoji: '🥗', price: 14.99, originalPrice: 19.99, badge: 'sale', badgeText: 'Sale', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=400&fit=crop&q=80', desc: 'Done-for-you meal prep plans with macro tracking.', specs: ['12 weeks', 'Meal plans', 'Grocery lists', 'Macro tracking'], variantLabel: 'Diet', variants: ['Standard', 'Keto', 'Vegan', 'Paleo'] },
  { id: 12, name: 'Quick-Dry Gym Towel Set', category: 'apparel', emoji: '🧴', price: 19.99, originalPrice: null, badge: null, badgeText: null, image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop&q=80', desc: 'Set of 3 microfibre gym towels.', specs: ['Set of 3', 'Microfibre', 'Antibacterial', 'Compact fold'], variantLabel: 'Color', variants: ['Grey', 'Black', 'Navy'] },
  { id: 13, name: 'Wrist & Ankle Weights Set', category: 'gear', emoji: '🦶', price: 27.99, originalPrice: null, badge: null, badgeText: null, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop&q=80', desc: 'Adjustable 2lb each wrist/ankle weights.', specs: ['2lb each', 'Adjustable', 'Neoprene', 'Sand-filled'], variantLabel: 'Weight', variants: ['1lb', '2lb', '3lb', '5lb'] },
  { id: 14, name: 'Mindfulness & Meditation Guide', category: 'digital', emoji: '🧠', price: 19.99, originalPrice: null, badge: 'trending', badgeText: 'Trending', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop&q=80', desc: '30-day guided meditation program.', specs: ['30 days', 'Audio tracks', 'Journal prompts', 'Breathwork exercises'], variantLabel: 'Format', variants: ['Audio Only', 'Audio + PDF'] },
  { id: 15, name: 'Performance Tank Top', category: 'apparel', emoji: '👕', price: 34.99, originalPrice: 44.99, badge: 'sale', badgeText: 'Sale', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&q=80', desc: 'Lightweight, moisture-wicking tank top.', specs: ['Moisture-wicking', 'Racerback', 'Flatlock seams', 'UPF 50+'], variantLabel: 'Size', variants: ['S', 'M', 'L', 'XL', 'XXL'] }
];
extraProducts.forEach(function(p) { PRODUCTS.push(p); });
console.log('All products loaded:', PRODUCTS.length);
