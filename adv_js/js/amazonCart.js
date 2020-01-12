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
    console.log("Add Item called")
    const updatedCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItem(user) {
    console.log("Apply Tax")
    const {cart} = user;
    const taxRate = 1.3;
    const updateCart = cart.map(item => {
        return {
            name : item.name,
            price : item.price*taxRate
        }
    })

    return Object.assign({},user,{cart:updateCart});
}

function buyItem(user) {
    console.log("Purchase Item called ");
    return Object.assign({},user,{purchase:user.cart});
}

function emptyCart(user) {
    return Object.assign({},user,{cart:[]});
}
