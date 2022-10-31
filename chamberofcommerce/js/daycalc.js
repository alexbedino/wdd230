// initialize display elements
const msInDay = 1000 * 60 * 60 * 24;
//todayDisplay.textContent = Math.round(Date.now()/msInDay);

// initialize display elements
const todayDisplay = document.getElementById("today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let timevisit = Number(window.localStorage.getItem("lastvisit"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastvisit", Date.now());
// show todays date.
todayDisplay.textContent = Math.round((Date.now()-timevisit)/msInDay);
