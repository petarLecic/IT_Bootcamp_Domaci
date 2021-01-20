import axios from 'axios';

let app = document.getElementById('app');

axios.get('https://api.spacexdata.com/v4/company')
    .then(res => setHeader(res.data.name));

function setHeader(string) {
    h1.textContent = string;
}

let h1 = document.createElement('h1');
let select = document.createElement('select');
    let opt1 = document.createElement('option');
        opt1.textContent = 'Launches';
        opt1.value = 'launches';
    let opt2 = document.createElement('option');
        opt2.textContent = 'Ships';
        opt2.value = 'ships';
    select.append(opt1, opt2);
let btnGet = document.createElement('button');
    btnGet.textContent = 'Get';
    btnGet.addEventListener('click', () => getOnClick(select.value));
let divList = document.createElement('div');
    divList.style.display = 'flex';
    divList.style.flexWrap = 'wrap';

app.append(h1, select, btnGet);

function getOnClick(option) {
    divList.innerHTML = '';
    app.append(divList);
    switch (option){
        case undefined:
            return alert("You didn't choose what to show!");
        case 'launches':
            getLaunches();
            break;
        case 'ships':
            getShips();
            break;
        default:
            alert('Something went wrong!');
    }
}


function getLaunches() {
    axios.get('https://api.spacexdata.com/v4/launches')
        .then(res => res.data.forEach(launch => launchToDOM(launch)));
}

function getShips() {
    axios.get('https://api.spacexdata.com/v4/ships')
        .then(res => res.data.forEach(ship => shipToDOM(ship)));
}

function launchToDOM(launch) {
    let divItem = document.createElement('div');
        divItem.style.width = '300px';
        divItem.style.margin = '5px';
        divItem.style.padding = '5px';
        divItem.style.border = '2px solid black';
    let img = document.createElement('img');
        img.src = launch.links.patch.small ? launch.links.patch.small : 'https://via.placeholder.com/150x150';
        img.width = '150';
        img.height = '150';
    let pFlightNum = document.createElement('p');
        pFlightNum.innerHTML = `<b>Flight Number</b>: ${launch.flight_number}`;
    let pName = document.createElement('p');
        pName.innerHTML = `<b>Name</b>: ${launch.name}`;
    divItem.append(img, pFlightNum, pName);
    divList.append(divItem);

}

function shipToDOM(ship) {
    let divItem = document.createElement('div');
        divItem.style.width = '300px';
        divItem.style.margin = '5px';
        divItem.style.padding = '5px';
        divItem.style.border = '2px solid black';
    let img = document.createElement('img');
        img.src = ship.image ? ship.image : 'https://via.placeholder.com/150x150';
        img.width = '150';
        img.height = '150';
    let pYear = document.createElement('p');
        pYear.textContent = `Year built: ${ship.year_built}`;
    let pName = document.createElement('p');
        pName.textContent = `Name: ${ship.name}`;
    divItem.append(img, pYear, pName);
    divList.append(divItem);

}