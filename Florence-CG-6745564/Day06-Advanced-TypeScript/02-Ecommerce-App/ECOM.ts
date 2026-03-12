interface Product {
    name: string;
    image: string;
    price: number;
}

const mobiles: Product[] = [
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

const laptops: Product[] = [
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

const earphones: Product[] = [
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

function displayProducts(products: Product[], containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>₹ ${product.price}</p>
            <button onclick="addToCart('${product.name}', '${product.image}', ${product.price})">
                Add to Cart
            </button>
        `;
        container.appendChild(div);
    });
}

function addToCart(name: string, image: string, price: number) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ name, image, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const count = document.getElementById("cart-count");
    if (count) count.innerText = cart.length.toString();
}

function loadCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("total");
    if (!cartContainer) return;

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item: any, index: number) => {
        total += item.price;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.image}">
            <div>
                <h4>${item.name}</h4>
                <p>₹ ${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    if (totalContainer)
        totalContainer.innerText = "Total: ₹ " + total;
}

function removeItem(index: number) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

window.onload = () => {
    updateCartCount();
    displayProducts(mobiles, "mobile-products");
    displayProducts(laptops, "laptop-products");
    displayProducts(earphones, "earphone-products");
    loadCart();
};