let digimon1 = {
    name: 'Agumon',
    type: 'Reptile',
    attacks: ['Pepper Breath', 'Sharp Claws', 'Spirit Fire'],
    stats: {
        attack: 230,
        defence: 140,
        speed: 380
    },
    image: './Digimon_pics/agumon.jpg'
};

let digimon2 = {
    name: 'Gabumon',
    type: 'Reptile',
    attacks: ['Blue Blaster', 'Horn Attack', 'Hidden Punch'],
    stats: {
        attack: 260,
        defence: 150,
        speed: 350
    },
    image: './Digimon_pics/gabumon.jpg'
};

let digimon3 = {
    name: 'Gomamon',
    type: 'Sea Animal',
    attacks: ['Fish Power', 'Sharp Sider', 'Sliding Seal'],
    stats: {
        attack: 250,
        defence: 140,
        speed: 350
    },
    image: './Digimon_pics/gomamon.jpg'
};

let digimon4 = {
    name: 'Palmon',
    type: 'Vegetation',
    attacks: ['Poison Ivy', 'Plant Shock', 'Root Breaker'],
    stats: {
        attack: 250,
        defence: 130,
        speed: 370
    },
    image: './Digimon_pics/palmon.jpg'
};

let digimon5 = {
    name: 'Biyomon',
    type: 'Bird',
    attacks: ['Spiral Twister', 'Violin Attack', 'Turbo Pecker'],
    stats: {
        attack: 240,
        defence: 140,
        speed: 350
    },
    image: './Digimon_pics/biyomon.jpg'
};

let digimon6 = {
    name: 'Tentomon',
    type: 'Insectoid',
    attacks: ['Super Shocker', 'Talon Attack', 'Shock Jaw'],
    stats: {
        attack: 230,
        defence: 100,
        speed: 350
    },
    image: './Digimon_pics/tentomon.jpg'
};

let digimon7 = {
    name: 'Patamon',
    type: 'Mammal',
    attacks: ['Boom Bubble', 'Thousend Wings', 'Breeze Blaster'],
    stats: {
        attack: 245,
        defence: 150,
        speed: 360
    },
    image: './Digimon_pics/patamon.jpg'
};

let digimoni = [];
digimoni.push(digimon1, digimon2, digimon3, digimon4, digimon5, digimon6, digimon7);

// 1. Zadatak

function strongest(arr) {
    let arrCopy = arr.map(el => el);
    return arrCopy.sort((a, b) => b.stats.attack - a.stats.attack)[0];
}

// 2. Zadatak

let btnPrikaz = document.querySelector('#prikaz');
let btnPobednik = document.querySelector('#pobednik');

let suPrikazani = false;
let jePrikazan = false;

function prikaziSve() {
    if (suPrikazani) return;

    if (document.getElementById('najjaci')) {
        document.getElementById('najjaci').remove()
        jePrikazan = false;
    }

    let divSviDigimoni = document.createElement('div');
    divSviDigimoni.id = 'svi';

    digimoni.forEach(el => {
        let divDigimon = document.createElement('div')
        let pDigimon = document.createElement('p');
        let pDigimon2 = document.createElement('p');
        let imgDigimon = document.createElement('img');

        pDigimon.textContent = `${el.name} (${el.type})`;
        pDigimon2.textContent = `Attacks: ${el.attacks.join(', ')}`;
        imgDigimon.src = el.image;

        divDigimon.append(pDigimon, pDigimon2, imgDigimon);
        divSviDigimoni.append(divDigimon);
    });

    document.body.append(divSviDigimoni);
    suPrikazani = true;
    console.log(typeof divSviDigimoni);
}

function prikaziNajjaceg() {
    if (jePrikazan) return;

    if (document.getElementById('svi')) {
        document.getElementById('svi').remove();
        suPrikazani = false;
    }


    let divDigimon = document.createElement('div')
    let pDigimon = document.createElement('p');
    let pDigimon2 = document.createElement('p');
    let imgDigimon = document.createElement('img');

    let pobednik = strongest(digimoni);

    divDigimon.id = 'najjaci';
    pDigimon.textContent = `${pobednik.name} (${pobednik.type})`;
    pDigimon2.textContent = `Attacks: ${pobednik.attacks.join(', ')}`;
    imgDigimon.src = pobednik.image;

    divDigimon.append(pDigimon, pDigimon2, imgDigimon);
    document.body.append(divDigimon);

    jePrikazan = true;
}

btnPrikaz.addEventListener('click', prikaziSve);
btnPobednik.addEventListener('click', prikaziNajjaceg);
