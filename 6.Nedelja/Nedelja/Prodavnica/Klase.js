export class User {
    name
    password
    cart
    isLoggedIn
    isAdmin
    constructor(name, password, isAdmin) {
        this.name = name;
        this.password = password;
        this.cart = [];
        this.isLoggedIn = false;
        this.isAdmin = isAdmin;
    }

    logIn() {
        this.isLoggedIn = true;
    }

    logOut() {
        this.isLoggedIn = false;
    }

    addToCart(obj, amount) {
        let productForCart = {
            name: obj.name,
            amount: amount,
            price: Number(amount) * obj.price
        };
        this.cart.push(productForCart);
        return productForCart;
    }

    removeFromCart(obj) {
        let index = this.cart.findIndex(el => el.name == obj.name);
        this.cart.splice(index, 1);
    }
}

export class Product {
    name
    price
    supplies
    constructor(name, price, supplies, type) {
        this.name = name;
        this.price = price;
        this.supplies = supplies;
        if (type == 'prehrambeni') this.exDate = '12.12.2021.';
        if (type == 'belaTehnika') this.warranty = '5 godina';
    }
}
