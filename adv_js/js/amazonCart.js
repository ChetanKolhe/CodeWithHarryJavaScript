console.log("Amazon cart tutorial");

const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchase: [],
}


const compose = (f, g) => (...args) => f(g(...args))

const history = [];

let result = purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItem,
    addItemToCart)(user, { name: "Laptop", price: 344 });

console.log(result)

function purchaseItem(...fns) {
    return fns.reduce(compose);
}

function addItemToCart(user, item) {
    const updatedCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItem(user) {
    return user;
}

function buyItem(user) {
    return user;
}

function emptyCart(user) {
    return user;
}
