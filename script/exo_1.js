// Find the timezones of :

    // Anchorage (USA)
    // Reykjavik (Iceland)
    // Saint-Petersburg (Russia)

// And display the date and time of these cities along with the time and date of Brussels.


// -----------------------------------------------------------


//On crée une date
let dateLocale = new Date();


// Brussels
let brussels = dateLocale.toLocaleString('fr-EU',{timeZone: 'Europe/Brussels'});
console.log('Bruxelles : ', brussels);


// Anchorage (USA)
let anchorage = dateLocale.toLocaleString('fr-EU',{timeZone: 'America/Anchorage'});
console.log('Anchorage : ', anchorage);


// Reykjavik (Iceland)
let reykjavik = dateLocale.toLocaleString('fr-EU',{timeZone: 'Atlantic/Reykjavik'});
console.log('Reykjavik : ', reykjavik);

// Saint-Petersburg (Russia)
let saintPetersburg = dateLocale.toLocaleString('fr-EU',{timeZone: 'Europe/Moscow'});
console.log('Saint-Petersburg : ', saintPetersburg);



let exo1 = document.querySelector('.exo1');

let brusselsParag = document.createElement('p');
brusselsParag.textContent = 'Bruxelles : ' + brussels;
exo1.appendChild(brusselsParag);
let anchorageParag = document.createElement('p');
anchorageParag.textContent = 'Anchorage : ' + anchorage;
exo1.appendChild(anchorageParag);
let reykjavikParag = document.createElement('p');
reykjavikParag.textContent = 'Reykjavik : ' + reykjavik;
exo1.appendChild(reykjavikParag);
let saintPetersburgParag = document.createElement('p');
saintPetersburgParag.textContent = 'Saint-Petersburg : ' + saintPetersburg;
exo1.appendChild(saintPetersburgParag);

