// 1. Zadatak
let digimon1 = {
    name: 'Agumon',
    type: 'Reptile',
    attacks: ['Pepper Breath', 'Sharp Claws', 'Spirit Fire'],
    stats: {
        attack: 230,
        defence: 140,
        speed: 380
    }
};

let digimon2 = {
    name: 'Gabumon',
    type: 'Reptile',
    attacks: ['Blue Blaster', 'Horn Attack', 'Hidden Punch'],
    stats: {
        attack: 240,
        defence: 150,
        speed: 350
    }
};

let digimon3 = {
    name: 'Gomamon',
    type: 'Sea Animal',
    attacks: ['Fish Power', 'Sharp Sider', 'Sliding Seal'],
    stats: {
        attack: 250,
        defence: 140,
        speed: 350
    }
};

let digimon4 = {
    name: 'Palmon',
    type: 'Vegetation',
    attacks: ['Poison Ivy', 'Plant Shock', 'Root Breaker'],
    stats: {
        attack: 250,
        defence: 130,
        speed: 370
    }
};

let digimon5 = {
    name: 'Biyomon',
    type: 'Bird',
    attacks: ['Spiral Twister', 'Violin Attack', 'Turbo Pecker'],
    stats: {
        attack: 240,
        defence: 140,
        speed: 350
    }
};
let digimon6 = {
    name: 'Tentomon',
    type: 'Insectoid',
    attacks: ['Super Shocker', 'Talon Attack', 'Shock Jaw'],
    stats: {
        attack: 250,
        defence: 100,
        speed: 350
    }
};
let digimon7 = {
    name: 'Patamon',
    type: 'Mammal',
    attacks: ['Boom Bubble', 'Thousend Wings', 'Breeze Blaster'],
    stats: {
        attack: 250,
        defence: 150,
        speed: 360
    }
};

let digimoni = [];
digimoni.push(digimon1, digimon2, digimon3, digimon4, digimon5, digimon6, digimon7);

// 2. Zadatak

function allAttacks(arr) {
    let attacksArr = [];
    arr.forEach(el => attacksArr.push(el.attacks));
    return attacksArr.flat();
}

// 3. Zadatak

digimoni.sort((a, b) => a.stats.speed - b.stats.speed);
