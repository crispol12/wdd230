document.addEventListener('DOMContentLoaded', function () {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const directory = document.getElementById('member-directory');
            data.members.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.className = 'member-card';
                memberElement.innerHTML = `
                    <!-- Ajustamos la imagen: quitamos estilos inline y añadimos width/height -->
                    <img 
                        src="images/${member.image}" 
                        alt="${member.name}" 
                        class="member-image" 
                        loading="lazy"
                        width="300" 
                        height="200"
                    >
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership:</strong> ${member.membership}</p>
                    <p><strong>Description:</strong> ${member.description}</p>
                `;
                directory.appendChild(memberElement);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});

function changeView(view) {
    const directory = document.getElementById('member-directory');
    directory.className = view; // Set the class for grid or list view

    // Toggle image visibility based on the view
    const images = document.querySelectorAll('.member-image');
    if (view === 'list') {
        images.forEach(image => image.style.display = 'none'); // Hide images in list view
    } else {
        images.forEach(image => image.style.display = 'block'); // Show images in grid view
    }
}