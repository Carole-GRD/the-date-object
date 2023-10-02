// Using timestamps, find the exact time and date we will be in 80000 hours.

// Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.



// -----------------------------------------------------------

// const today = new Date();

// let futurDate = new Date(today.getTime() + (80000 * 60 * 60 * 1000)).toString();

// -----------------------------------------------------------


let exo3 = document.querySelector('.exo3');

let label = document.createElement('label');
label.setAttribute('for', 'timeToAdd');
label.textContent = 'Heures à ajouter : ';
exo3.appendChild(label);

let input = document.createElement('input');
input.setAttribute('id', 'timeToAdd');
input.setAttribute('type', 'number');
input.addEventListener('keyup', calculateDate);
input.addEventListener('input', calculateDate);
exo3.appendChild(input);

let displayPresent = document.createElement('p');
exo3.appendChild(displayPresent);

let displayFutur = document.createElement('p');
exo3.appendChild(displayFutur);





/**
 * Calculate a future date based on the input hours and display it.
 *
 * @param {Event} e - The event object that triggered the function.
 */
function calculateDate(e) {
    // Get the current date and time
    const today = new Date();
    
    // Format the current date
    const todayDate =
        `${today.getDate().toString().padStart(2, '0')}/` +
        `${(today.getMonth() + 1).toString().padStart(2, '0')}/` +
        `${today.getFullYear()}`;

    // Format the current time (hours, minutes, seconds)
    const todayHour =
        `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}:${today.getSeconds().toString().padStart(2, '0')}`;

    // Display the current date and time
    displayPresent.textContent = `${todayDate} à ${todayHour}`;

    // Calculate the future date by adding the specified number of hours
    const hoursToAdd = parseInt(e.target.value, 10);

    if (!isNaN(hoursToAdd)) {
        const futureDate = new Date(today.getTime() + hoursToAdd * 60 * 60 * 1000);

        // Format the future date
        const futureDateStr =
            `${futureDate.getDate().toString().padStart(2, '0')}/` +
            `${(futureDate.getMonth() + 1).toString().padStart(2, '0')}/` +
            `${futureDate.getFullYear()} à ` +
            `${futureDate.getHours().toString().padStart(2, '0')}:${futureDate.getMinutes().toString().padStart(2, '0')}:${futureDate.getSeconds().toString().padStart(2, '0')}`;

      // Display the calculated future date
        displayFutur.textContent = futureDateStr;
    } else {
        // Handle the case where the input is not a valid number
        displayFutur.textContent = 'Invalid input';
    }
}