var mobiles = [
    {
        name: "iPhone 14",
        image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/hermano/verge/product/image/9965/226270_IPHONE_14_REGULAR_PHO_akrales_0682.jpeg?quality=90&strip=all&crop=16.666666666667%2C0%2C66.666666666667%2C100&w=2400",
        price: 80000
    },
    {
        name: "Samsung Galaxy",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s731bdbcins/gallery/in-galaxy-s25-fe-sm-s731-sm-s731bdbcins-thumb-548902985",
        price: 70000
    },
    {
        name: "OnePlus 11",
        image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 60000
    },
    {
        name: "Google Pixel 7",
        image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 65000
    },
    {
        name: "Oppo Reno",
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 30000
    },
    {
        name: "Vivo V27",
        image: "https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 28000
    }
];
var laptops = [
    {
        name: "MacBook Pro",
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
        price: 150000
    },
    {
        name: "HP Pavilion",
        image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 80000
    },
    {
        name: "Dell XPS",
        image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 120000
    },
    {
        name: "Asus ROG",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 110000
    },
    {
        name: "Lenovo ThinkPad",
        image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
        price: 90000
    },
    {
        name: "Acer Aspire",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 70000
    }
];
var earphones = [
    {
        name: "Apple AirPods",
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 20000
    },
    {
        name: "Sony Buds",
        image: "https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 15000
    },
    {
        name: "Boat Airdopes",
        image: "https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 3000
    },
    {
        name: "JBL Tune",
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 5000
    },
    {
        name: "Noise Buds",
        image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 2500
    },
    {
        name: "Realme Buds",
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 3500
    }
];
function displayProducts(products, containerId) {
    var container = document.getElementById(containerId);
    if (!container)
        return;
    container.innerHTML = "";
    products.forEach(function (product) {
        var div = document.createElement("div");
        div.className = "product";
        div.innerHTML = "\n            <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\">\n            <h4>").concat(product.name, "</h4>\n            <p>\u20B9 ").concat(product.price, "</p>\n            <button onclick=\"addToCart('").concat(product.name, "', '").concat(product.image, "', ").concat(product.price, ")\">\n                Add to Cart\n            </button>\n        ");
        container.appendChild(div);
    });
}
function addToCart(name, image, price) {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ name: name, image: image, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}
function updateCartCount() {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    var count = document.getElementById("cart-count");
    if (count)
        count.innerText = cart.length.toString();
}
function loadCart() {
    var cartContainer = document.getElementById("cart-items");
    var totalContainer = document.getElementById("total");
    if (!cartContainer)
        return;
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cartContainer.innerHTML = "";
    var total = 0;
    cart.forEach(function (item, index) {
        total += item.price;
        var div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = "\n            <img src=\"".concat(item.image, "\">\n            <div>\n                <h4>").concat(item.name, "</h4>\n                <p>\u20B9 ").concat(item.price, "</p>\n                <button onclick=\"removeItem(").concat(index, ")\">Remove</button>\n            </div>\n        ");
        cartContainer.appendChild(div);
    });
    if (totalContainer)
        totalContainer.innerText = "Total: ₹ " + total;
}
function removeItem(index) {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
}
window.onload = function () {
    updateCartCount();
    displayProducts(mobiles, "mobile-products");
    displayProducts(laptops, "laptop-products");
    displayProducts(earphones, "earphone-products");
    loadCart();
};
