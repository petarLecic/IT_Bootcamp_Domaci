let count = 0;

let h1Count = document.querySelector('#count');
let btnsOrder = document.querySelectorAll('.order');
let btnsOrderNow = document.querySelectorAll('.orderNow');

h1Count.textContent = count;

btnsOrder.forEach(el => el.addEventListener('click', () => {
    count++;
    h1Count.textContent = count;
}));

btnsOrderNow.forEach(el => el.addEventListener('click', () => orderNow()));

function orderNow() {
    if (count == 0) {
        alert('You can\'t order 0 pizzas');
        return;
    }

    let thisMoment = new Date();
    let date = thisMoment.toDateString();
    let hours = thisMoment.getHours() < 10 ? '0' + thisMoment.getHours() : thisMoment.getHours();
    let minutes = thisMoment.getMinutes() < 10 ? '0' + thisMoment.getMinutes() : thisMoment.getMinutes();
    let time = `${hours}:${minutes}`;

    if (count == 1) {
        alert(`You've just ordered ${count} pizza\n ${time} [${date}]`);
    } else {
        alert(`You've just ordered ${count} pizzas\n ${time} [${date}]`);
    }

    count = 0;
    h1Count.textContent = count;
}
