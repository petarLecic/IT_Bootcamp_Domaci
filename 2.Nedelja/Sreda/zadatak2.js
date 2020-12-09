let cena = 1200;
let novac = 2000;

if (novac - cena < 0) {
    console.log('Nemate dovoljno novca.');
    console.log(`Trenutno stanje: ${novac}`);
} else {
    novac -= cena;
    console.log('Uspešno ste kupili proizvod.');
    console.log(`Trenutno stanje: ${novac}`);
}