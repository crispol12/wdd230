// *******************************************************
//  1) Banner: aparece solo lunes (1), martes (2), miércoles (3)
// *******************************************************
const meetBanner = document.getElementById('meet-banner');
const closeBannerBtn = document.getElementById('close-banner');
const today = new Date().getDay(); // 0=Dom, 1=Lun, 2=Mar, 3=Mié...

// Muestra el banner si es lun/mar/mié
if (today === 1 || today === 2 || today === 3) {
  meetBanner.style.display = 'block';
}

// Botón para cerrar el banner
closeBannerBtn.addEventListener('click', () => {
  meetBanner.style.display = 'none';
});

// *******************************************************
//  2) Spotlights: 2 o 3 miembros "Silver" o "Gold" al azar
// *******************************************************
fetch('members.json') // Ajusta la ruta si está en otra carpeta (por ejemplo: './data/members.json')
  .then(response => response.json())
  .then(data => {
    // Filtra los miembros con membresía Silver o Gold
    const filteredMembers = data.members.filter(member =>
      member.membership === 'Silver' || member.membership === 'Gold'
    );

    // Mezcla (shuffle) el array para randomizar el orden
    function shuffleArray(array) {
      array.sort(() => 0.5 - Math.random());
    }
    shuffleArray(filteredMembers);

    // Elegir aleatoriamente si mostrar 2 o 3
    const randomCount = Math.random() < 0.5 ? 2 : 3;
    const spotlightMembers = filteredMembers.slice(0, randomCount);

    // Inyectar la info en el DOM
    const spotlightsContainer = document.getElementById('spotlights-container');

    spotlightMembers.forEach(member => {
      const spotlightDiv = document.createElement('div');
      spotlightDiv.classList.add('spotlight');

      // Estructura interna de cada spotlight
      spotlightDiv.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Description:</strong> ${member.description}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      spotlightsContainer.appendChild(spotlightDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching members:', error);
  });