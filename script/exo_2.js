// Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

// Write a function to find how many days have passed since any point in time (after 1970).

let today = new Date();
// console.log('Ajourd\'hui : ', today);

let birth = new Date('1978-03-16');
// console.log('Naissance', birth);

let days = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
// console.log('Nombre de jours : ', days);

let years = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365));
// console.log('Nombre d\'années : ', years);


function howManyDays(pointInTheTime) {
    let today = new Date();
    
    let days = Math.floor((today.getTime() - new Date(pointInTheTime).getTime()) / (1000 * 60 * 60 * 24))
    return 'Nombre de jours : ' + days;
}
console.log(howManyDays('2023-10-01'));
console.log(howManyDays('2023-09-30'));
console.log(howManyDays('2023-09-29'));
console.log(howManyDays('1978-03-16'));
