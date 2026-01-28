// 商品数据
const products = [
    {
        id: 1,
        name: "智能手机 Pro Max",
        price: 8999,
        rating: 4.8,
        category: "electronics",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20smartphone%20with%20sleek%20design%20on%20white%20background&image_size=square"
    },
    {
        id: 2,
        name: "无线蓝牙耳机",
        price: 1299,
        rating: 4.5,
        category: "electronics",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wireless%20bluetooth%20earbuds%20in%20charging%20case&image_size=square"
    },
    {
        id: 3,
        name: "智能手表 Series 7",
        price: 2999,
        rating: 4.6,
        category: "electronics",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20watch%20with%20color%20display&image_size=square"
    },
    {
        id: 4,
        name: "运动休闲鞋",
        price: 899,
        rating: 4.3,
        category: "clothing",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sports%20sneakers%20in%20modern%20design&image_size=square"
    },
    {
        id: 5,
        name: "纯棉T恤衫",
        price: 199,
        rating: 4.2,
        category: "clothing",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plain%20cotton%20t-shirt%20on%20hanger&image_size=square"
    },
    {
        id: 6,
        name: "牛仔裤",
        price: 499,
        rating: 4.4,
        category: "clothing",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20jeans%20folded%20neatly&image_size=square"
    },
    {
        id: 7,
        name: "北欧风格沙发",
        price: 5999,
        rating: 4.7,
        category: "home",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=scandinavian%20style%20sofa%20in%20light%20color&image_size=square"
    },
    {
        id: 8,
        name: "智能台灯",
        price: 399,
        rating: 4.1,
        category: "home",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20smart%20desk%20lamp%20with%20adjustable%20light&image_size=square"
    },
    {
        id: 9,
        name: "护肤套装",
        price: 699,
        rating: 4.5,
        category: "beauty",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=skincare%20set%20with%20bottles%20and%20jars&image_size=square"
    },
    {
        id: 10,
        name: "口红套装",
        price: 599,
        rating: 4.6,
        category: "beauty",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lipstick%20set%20in%20luxury%20packaging&image_size=square"
    },
    {
        id: 11,
        name: "平板电脑",
        price: 3699,
        rating: 4.7,
        category: "electronics",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tablet%20computer%20with%20thin%20design&image_size=square"
    },
    {
        id: 12,
        name: "智能音箱",
        price: 899,
        rating: 4.4,
        category: "electronics",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20speaker%20with%20voice%20assistant&image_size=square"
    },
    {
        id: 13,
        name: "连衣裙",
        price: 399,
        rating: 4.3,
        category: "clothing",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20summer%20dress%20hanging%20on%20mannequin&image_size=square"
    },
    {
        id: 14,
        name: "运动鞋",
        price: 699,
        rating: 4.5,
        category: "clothing",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=running%20shoes%20with%20modern%20technology&image_size=square"
    },
    {
        id: 15,
        name: "床上四件套",
        price: 599,
        rating: 4.2,
        category: "home",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bed%20sheets%20and%20pillowcases%20in%20soft%20colors&image_size=square"
    },
    {
        id: 16,
        name: "香薰蜡烛",
        price: 199,
        rating: 4.1,
        category: "home",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aromatic%20candles%20in%20decorative%20jars&image_size=square"
    },
    {
        id: 17,
        name: "香水礼盒",
        price: 899,
        rating: 4.7,
        category: "beauty",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=perfume%20gift%20set%20in%20luxury%20box&image_size=square"
    },
    {
        id: 18,
        name: "面膜套装",
        price: 299,
        rating: 4.4,
        category: "beauty",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=facial%20mask%20sheets%20in%20packaging&image_size=square"
    }
];

// 全局状态
let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = [...products];
let currentCategory = 'all';
let priceRange = { min: 0, max: 1000 };
let searchQuery = '';
let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');

// DOM元素
const productsGrid = document.getElementById('products-grid');
const pagination = document.getElementById('pagination');
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');
const cartCount = document.querySelector('.cart-count');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchHistoryEl = document.getElementById('search-history');
const priceMin = document.getElementById('price-min');
const priceMax = document.getElementById('price-max');
const priceMinValue = document.getElementById('price-min-value');
const priceMaxValue = document.getElementById('price-max-value');
const categoryItems = document.querySelectorAll('.category-item');
const sortSelect = document.getElementById('sort-select');

// 初始化
function init() {
    renderProducts();
    renderPagination();
    updateCartCount();
    renderCart();
    initImageLazyLoad();
    bindEvents();
}

// 绑定事件
function bindEvents() {
    // 购物车图标点击
    cartIcon.addEventListener('click', toggleCartDropdown);
    
    // 搜索功能
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('focus', showSearchHistory);
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', (e) => {
        if (!cartIcon.contains(e.target)) {
            cartDropdown.classList.remove('show');
        }
        if (!searchInput.contains(e.target) && !searchHistoryEl.contains(e.target)) {
            searchHistoryEl.classList.remove('show');
        }
    });
    
    // 价格筛选
    priceMin.addEventListener('input', updatePriceRange);
    priceMax.addEventListener('input', updatePriceRange);
    
    // 分类筛选
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            currentCategory = item.dataset.category;
            currentPage = 1;
            filterProducts();
        });
    });
    
    // 排序功能
    sortSelect.addEventListener('change', () => {
        currentPage = 1;
        filterProducts();
    });
}

// 渲染商品
function renderProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    if (pageProducts.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px;">没有找到符合条件的商品</div>';
        return;
    }
    
    pageProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img 
                    src="" 
                    data-src="${product.image}" 
                    alt="${product.name}" 
                    class="product-image lazy"
                    loading="lazy"
                >
                <div class="product-image-placeholder">加载中...</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">¥${product.price.toLocaleString()}</div>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span>(${product.rating})</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">加入购物车</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // 触发懒加载
    lazyLoadImages();
}

// 渲染分页
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    pagination.innerHTML = '';
    
    // 上一页按钮
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '上一页';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            renderPagination();
        }
    });
    pagination.appendChild(prevBtn);
    
    // 页码按钮
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.toggle('active', i === currentPage);
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderProducts();
            renderPagination();
        });
        pagination.appendChild(pageBtn);
    }
    
    // 下一页按钮
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '下一页';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            renderPagination();
        }
    });
    pagination.appendChild(nextBtn);
}

// 购物车功能
function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function addToCart(productId) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart(cart);
    updateCartCount();
    renderCart();
    
    // 显示添加成功提示
    const addBtn = event.target;
    const originalText = addBtn.textContent;
    addBtn.textContent = '已添加';
    addBtn.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        addBtn.textContent = originalText;
        addBtn.style.backgroundColor = '#333';
    }, 1000);
}

function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart(cart);
            updateCartCount();
            renderCart();
        }
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
    renderCart();
}

function toggleCartDropdown() {
    cartDropdown.classList.toggle('show');
    if (cartDropdown.classList.contains('show')) {
        renderCart();
    }
}

function renderCart() {
    const cart = getCart();
    cartDropdown.innerHTML = '';
    
    if (cart.length === 0) {
        cartDropdown.innerHTML = '<p style="text-align: center; padding: 20px;">购物车为空</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">¥${item.price.toLocaleString()}</div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <input type="text" value="${item.quantity}" disabled>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <span class="cart-item-remove" onclick="removeFromCart(${item.id})"></span>
                </div>
            </div>
        `;
        cartDropdown.appendChild(cartItem);
    });
    
    // 计算总价
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // 添加总价和操作按钮
    const cartTotal = document.createElement('div');
    cartTotal.className = 'cart-total';
    cartTotal.innerHTML = `
        <span>总计:</span>
        <span>¥${total.toLocaleString()}</span>
    `;
    cartDropdown.appendChild(cartTotal);
    
    const cartActions = document.createElement('div');
    cartActions.className = 'cart-actions';
    cartActions.innerHTML = `
        <button class="checkout-btn">去结算</button>
        <button class="clear-cart-btn" onclick="clearCart()">清空购物车</button>
    `;
    cartDropdown.appendChild(cartActions);
}

// 搜索功能
function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        // 添加到搜索历史
        if (!searchHistory.includes(query)) {
            searchHistory.unshift(query);
            if (searchHistory.length > 5) {
                searchHistory = searchHistory.slice(0, 5);
            }
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }
        
        searchQuery = query;
        currentPage = 1;
        filterProducts();
        searchHistoryEl.classList.remove('show');
    }
}

function handleSearchInput() {
    const query = searchInput.value.trim();
    if (query) {
        showSearchHistory();
    } else {
        searchHistoryEl.classList.remove('show');
    }
}

function showSearchHistory() {
    if (searchHistory.length === 0) {
        return;
    }
    
    searchHistoryEl.innerHTML = `
        <h4>搜索历史</h4>
        <ul>
            ${searchHistory.map(item => `<li onclick="selectSearchHistory('${item}')">${item}</li>`).join('')}
        </ul>
    `;
    searchHistoryEl.classList.add('show');
}

function selectSearchHistory(item) {
    searchInput.value = item;
    performSearch();
}

// 价格筛选
function updatePriceRange() {
    priceRange.min = parseInt(priceMin.value);
    priceRange.max = parseInt(priceMax.value);
    
    priceMinValue.textContent = `¥${priceRange.min}`;
    priceMaxValue.textContent = `¥${priceRange.max}`;
    
    currentPage = 1;
    filterProducts();
}

// 筛选商品
function filterProducts() {
    filteredProducts = products.filter(product => {
        // 分类筛选
        if (currentCategory !== 'all' && product.category !== currentCategory) {
            return false;
        }
        
        // 价格筛选
        if (product.price < priceRange.min || product.price > priceRange.max) {
            return false;
        }
        
        // 搜索筛选
        if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        
        return true;
    });
    
    // 排序
    const sortValue = sortSelect.value;
    switch (sortValue) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // 默认排序
            break;
    }
    
    renderProducts();
    renderPagination();
}

// 图片懒加载
function initImageLazyLoad() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // 降级方案
        document.querySelectorAll('img.lazy').forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
        });
    }
}

function lazyLoadImages() {
    initImageLazyLoad();
}

// 初始化应用
init();

// 响应式调整
window.addEventListener('resize', () => {
    // 可以添加响应式调整逻辑
});
