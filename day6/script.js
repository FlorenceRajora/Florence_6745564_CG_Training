var products = [
    {
        name: "Porsche 911 GT3",
        price: 25000000,
        image: "https://content-hub.imgix.net/3PMTpjsn9rhbU9TMcGUsv4/9cc126d8dffcaeacbfdd9f51da86e598/2025_911_GT3_hero.jpg?w=2064"
    },
    {
        name: "GT3 Touring",
        price: 24000000,
        image: "https://www.supercars.net/blog/wp-content/uploads/2024/10/2025-Porsche-Taycan-2-770x545.png"
    },
    {
        name: "GT3 Sport",
        price: 26000000,
        image: "https://img.autocarindia.com/ExtraImages/20240710074512_2024_Porsche_911_lead.png?w=728&q=75"
    },
    {
        name: "GT3 Track Edition",
        price: 27000000,
        image: "https://a.storyblok.com/f/322327/5760x1899/635c30351d/cz26w10ox0003-911-turbo-s-side-desktop.jpg/m/2560x822/smart/filters:format(webp)"
    },
    {
        name: "GT3 Performance",
        price: 25500000,
        image: "https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Imported_Blog_Media/Most%20Expensive%20Porsche%20Cars%20of%20All%20Time-jpg-1.jpg?width=1600&height=900&name=Most%20Expensive%20Porsche%20Cars%20of%20All%20Time-jpg-1.jpg"
    },
    {
        name: "GT3 Limited",
        price: 28000000,
        image: "https://a.storyblok.com/f/322327/3840x1266/17176a3f9c/cz23v20ox0001-911-gt3-rs-rear-desktop.jpg/m/2560x822/smart/filters:format(webp)"
    }
];
var container = document.getElementById("products");
products.forEach(function (product) {
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = "\n        <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\">\n        <h3>").concat(product.name, "</h3>\n        <p>\u20B9").concat(product.price, "</p>\n        <button>Add to Cart</button>\n    ");
    var btn = card.querySelector("button");
    btn.addEventListener("click", function () {
        var cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.href = "cart.html";
    });
    container.appendChild(card);
});
