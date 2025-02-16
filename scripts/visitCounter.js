const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
  visitsDisplay.textContent = `👥 Visits: ${numVisits}`;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);