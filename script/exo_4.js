// Using HTML, CSS (and javascript, of course) reproduce the following picture. This should be centered both horizontaly and vertically in your page.

// (voir : assets/layoutexercice.png)

// The date should be of today, in your timezone. Refresh the display every seconds (hint), so the time stays exact even when the page stays open for a long time

// When clicking on the hours, toggle the display in 12-hours format or back to 24-hours format.

// -----------------------------------------------------------------



// --------------------  SETUP ------------------------

// Récupérer le body
let body = document.querySelector('body');

// Créer un conteneur global
let exo4 = document.createElement('div');
exo4.classList.add('exo4');
body.appendChild(exo4);


// Créer deux conteneurs : un pour la date et un pour l'heure
let dateContainer = document.createElement('div');
dateContainer.classList.add('dateContainer');
exo4.appendChild(dateContainer);

let hourContainer = document.createElement('div');
hourContainer.classList.add('hourContainer');
let hourContent = document.createElement('div');
hourContent.classList.add('hourContent');
hourContent.addEventListener('click', changeFormatHour);
hourContainer.appendChild(hourContent);
exo4.appendChild(hourContainer);


// Contenu du conteneur "HEURE"
let hourParag = document.createElement('p');
let secSpan = document.createElement('span');
hourContent.appendChild(hourParag);
hourContent.appendChild(secSpan);


// Contenu du conteneur "DATE" (jour de la semaine)
let dayOfWeekContent = document.createElement('div');
let dayOfWeekParag = document.createElement('p');
dayOfWeekContent.appendChild(dayOfWeekParag);
dateContainer.appendChild(dayOfWeekContent);

// Contenu du conteneur "DATE" (jour)
let dateContent = document.createElement('div');
// let dayContent = document.createElement('div');
let dayParag = document.createElement('p');
// dayContent.appendChild(dayParag);
// dateContainer.appendChild(dayContent);
dateContent.appendChild(dayParag);
dateContainer.appendChild(dateContent);

// Contenu du conteneur "DATE" (mois)
// let dateContent = document.createElement('div');
let dateParag = document.createElement('p');
dateContent.appendChild(dateParag);
dateContainer.appendChild(dateContent);

// Contenu du conteneur "DATE" (année)
let yearContent = document.createElement('div');
let yearParag = document.createElement('p');
yearContent.appendChild(yearParag);
dateContainer.appendChild(yearContent);




// -------------------   FUNCTIONS   -----------------------

/** 
 * Fonction qui récupère la date et l'heure
 */
function updateDate() {
    // Récupère la date actuelle
    let currentDate = new Date();
    let hours = currentDate.getHours();

    // Convertit l'heure au format 12 heures si la variable changeFormat est true et l'heure est supérieure à 12
    if (hours > 12 && changeFormat) {
        hours = hours % 12;
    }
    
    // Ajoute un '0' devant les heures si elles sont inférieures à 10
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = currentDate.getMinutes().toString().padStart(2, '0');
    let formattedSeconds = currentDate.getSeconds().toString().padStart(2, '0');

    // Met à jour l'affichage de l'heure, des minutes et des secondes
    hourParag.textContent = `${formattedHours}:${formattedMinutes}:`;
    secSpan.textContent = `${formattedSeconds}`;
    
    
    // Met à jour le jour de la semaine, le jour du mois, le mois et l'année
    dayOfWeekParag.textContent = `${currentDate.toDateString().slice(0, 3).toLocaleUpperCase()}`;
    dayParag.textContent = currentDate.toDateString().slice(8, 10);
    dateParag.textContent = currentDate.toDateString().slice(4, 7).toLocaleUpperCase();
    yearParag.textContent = currentDate.toDateString().slice(11, 15); 
}

// Crée un intervalle pour mettre à jour la date toutes les secondes
setInterval(updateDate, 1000);


// Variable pour suivre le format d'heure actuel (true pour 12 heures, false pour 24 heures)
let changeFormat = false;
/**
 * Fonction changeFormatHour
 * Cette fonction permet de basculer entre le format d'heure 12 heures et 24 heures.
 * Elle inverse la valeur de la variable changeFormat et met à jour immédiatement l'affichage.
 */
function changeFormatHour() {
    changeFormat = !changeFormat;
    updateDate(); // Mettre à jour l'affichage immédiatement après le changement de format
}
