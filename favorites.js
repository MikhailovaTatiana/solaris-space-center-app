document.addEventListener('DOMContentLoaded', () => {
    const favoritesContainer = document.querySelector('.favorites-main');
  
    if (favoritesContainer) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      favoritesContainer.innerHTML = '';
  
      if (favorites.length === 0) {
        favoritesContainer.innerHTML = `
            <p class="no-favorites-message">
                Inga favoritplaneter hittades.<br>
                Lägg till planeter till dina favoriter för att se dem här.
            </p>
        `;
        return;
    }
  
      favoritesContainer.innerHTML = favorites.map(planet => `
        <div class="planet-card">
          <img src="./planet-earth.jpg" class="planet-image" alt="planet image" />
          <div class="container">
            <h4>${planet.name}</h4>
          </div>
          <button class="removeButton" data-planet="${planet.name}">Ta bort favorit</button>
        </div>
      `).join('');
  
      // Add event listeners to remove buttons
      document.querySelectorAll('.removeButton').forEach(button => {
        button.addEventListener('click', (event) => {
          const planetName = event.target.getAttribute('data-planet');
          removePlanetFromFavorites(planetName);
        });
      });
    }
  });
  
  function removePlanetFromFavorites(planetName) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(planet => planet.name !== planetName);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    location.reload();
  }
  