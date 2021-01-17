import {User, Product} from './Klase.js';

let users = [
    new User('qwert', '12345', true),
    new User('asdfg', '54321', false)
];

let products = [
    new Product('Mleko', 100, 10, 'prehrambeni'),
    new Product('Šporet', 30000, 5, 'belaTehnika'),
    new Product('Plazma keks', 300, 15, 'prehrambeni'),
];

let inputUsername = document.querySelector('#username');
let inputPassword = document.querySelector('#password');
let form = document.querySelector('#forma');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let newUser = new User(inputUsername.value, inputPassword.value);
        if (!isValid(newUser)) return alert('Uneti podaci nisu tačni');
        let currentUser = login(newUser);
        inputUsername.value = '';
        inputPassword.value = '';
        if (currentUser.isAdmin == true) displayAdminForm();
        displayCart(currentUser);
    });
let divProizvodi = document.querySelector('.proizvodi');
let btnSignUp = document.querySelector('#signUp');
    btnSignUp.addEventListener('click', (e) => signUp(e, inputUsername.value, inputPassword.value))

products.forEach(el => {
    divProizvodi.append(displayProduct(el));
})

function signUp(e, username, password) {
    e.preventDefault();
    let newUser = new User(username, password, false);
    users.push(newUser);
    alert('Uspešna registracija!\nSada možete da se prijavite...');
    inputUsername.value = '';
    inputPassword.value = '';
}

function isValid(user) {
    return users.some(el => el.name == user.name && el.password == user.password);
}

function login(newUser) {
    let currentUser;
    for (let user of users) {
        if (user.name == newUser.name) {
            currentUser = user;
            currentUser.logIn();
        } else {
            user.logOut();
        }
    }
    return currentUser;
}

function displayCart(user) {
    let heading = document.createElement('h3');
        heading.textContent = `Vaša korpa: ${user.name}`;
    let divKorpa = document.createElement('div');
        divKorpa.id = 'cart';
    divKorpa.appendChild(heading);
    form.insertAdjacentElement('afterend', divKorpa);
}

function displayProduct(obj) {
    let divProizvod = document.createElement('div');
        divProizvod.className = 'proizvod'
    let pNaziv = document.createElement('p');
        pNaziv.textContent = `Naziv: ${obj.name}`;
    let pCena = document.createElement('p');
        pCena.textContent = `Cena: ${obj.price} RSD`;
    let inputAmount = document.createElement('input');
    let btnAdd = document.createElement('button');
        btnAdd.textContent = 'Dodaj u korpu';
        btnAdd.addEventListener('click', () => addOnClick(obj, inputAmount.value));
    if (obj.warranty) {
        let pGarancija = document.createElement('p');
        pGarancija.textContent = `Garancija: ${obj.warranty}`;
        divProizvod.append(pNaziv, pCena, pGarancija, inputAmount, btnAdd);
    } else if (obj.exDate) {
        let pRok = document.createElement('p');
        pRok.textContent = `Datum isteka ispravnosti: ${obj.exDate}`;
        divProizvod.append(pNaziv, pCena, pRok, inputAmount, btnAdd);
    }
    return divProizvod;
}

function addOnClick(obj, amount) {
    if (amount > obj.supplies) return alert(`Dostupna količina proizvoda je ${obj.supplies}`);
    obj.supplies -= amount;
    users.forEach(user => {
        if (user.isLoggedIn) user.addToCart(obj, amount);
    });
    document.querySelector('#cart').append(displayInCart(obj, amount));
}

function displayInCart(obj, amount) {
    let divProizvod = document.createElement('div');
        divProizvod.className = 'proizvod';
    let pNaziv = document.createElement('p');
        pNaziv.textContent = `Naziv: ${obj.name}`;
    let pCena = document.createElement('p');
        pCena.textContent = `Cena: ${obj.price} RSD`;
    let pKolicina = document.createElement('p');
        pKolicina.textContent = `Količina: ${amount}`;
    let btnRemove = document.createElement('button');
        btnRemove.textContent = 'Obriši';
        btnRemove.addEventListener('click', () => {
            divProizvod.remove();
            obj.supplies += Number(amount);
            users.forEach(user => {
                if (user.isLoggedIn) user.removeFromCart(obj);
            });
            console.log(users)
            console.log(products)
        });
    divProizvod.append(pNaziv, pCena, pKolicina, btnRemove);
    return divProizvod;
}

function displayAdminForm() {
    let adminForm = document.createElement('form');
    let nazivInput = document.createElement('input');
        nazivInput.placeholder = 'Naziv proizvoda...';
    let cenaInput = document.createElement('input');
        cenaInput.placeholder = 'Cena';
    let kolicinaInput = document.createElement('input');
        kolicinaInput.placeholder = 'Količina';
    let tipSelect = document.createElement('select');
        let opt1 = document.createElement('option');
            opt1.value = 'prehrambeni';
            opt1.textContent = 'Prehrambeni';
        let opt2 = document.createElement('option');
            opt2.value = 'belaTehnika';
            opt2.textContent = 'Bela tehnika'
        tipSelect.append(opt1, opt2);
    let dodajBtn = document.createElement('button');
        dodajBtn.textContent = 'Dodaj';
        dodajBtn.addEventListener('click', (e) => addProduct(e, nazivInput.value, cenaInput.value, kolicinaInput.value, tipSelect.value));
    adminForm.append(nazivInput, cenaInput, kolicinaInput, tipSelect, dodajBtn);
    divProizvodi.insertAdjacentElement( 'afterbegin',adminForm);
}

function addProduct(e, naziv, cena, kolicina, tip) {
    e.preventDefault();
    let newProduct = new Product(naziv, cena, kolicina, tip);
    products.push(newProduct);
    divProizvodi.append(displayProduct(newProduct));
}