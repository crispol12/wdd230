
//  1) Banner
const meetBanner = document.getElementById('meet-banner');
const closeBannerBtn = document.getElementById('close-banner');
const today = new Date().getDay(); 

if (today === 1 || today === 2 || today === 3) {
  meetBanner.style.display = 'block';
}

closeBannerBtn.addEventListener('click', () => {
  meetBanner.style.display = 'none';
});


//  2) Spotlights

fetch('members.json') 
  .then(response => response.json())
  .then(data => {
   
    const filteredMembers = data.members.filter(member =>
      member.membership === 'Silver' || member.membership === 'Gold'
    );

    function shuffleArray(array) {
      array.sort(() => 0.5 - Math.random());
    }
    shuffleArray(filteredMembers);

  
    const randomCount = Math.random() < 0.5 ? 2 : 3;
    const spotlightMembers = filteredMembers.slice(0, randomCount);


    const spotlightsContainer = document.getElementById('spotlights-container');

    spotlightMembers.forEach(member => {
      const spotlightDiv = document.createElement('div');
      spotlightDiv.classList.add('spotlight');

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