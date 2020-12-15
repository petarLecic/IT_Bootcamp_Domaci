function pozdrav(vreme) {
    if (vreme > 24 || vreme < 0) {
        console.log('Greška!');
    } else if (vreme > 3 && vreme < 12) {
        console.log('Dobro jutro!');
    } else if (vreme > 11 && vreme < 19) {
        console.log('Dobar dan!');
    } else {
        console.log('Dobro veče!');
    }
}
