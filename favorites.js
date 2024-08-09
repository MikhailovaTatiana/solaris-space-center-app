// Anna
document.addEventListener("DOMContentLoaded", () => {
  const favoritesContainer = document.querySelector(".favorite-cards");

  if (favoritesContainer) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritesContainer.innerHTML = "";
    if (favorites.length === 0) {
      favoritesContainer.innerHTML = `
                <p class="no-favorites-message">
                    Inga favoritplaneter hittades.<br>
                    Välg planeter på hemsidan.
                </p>
            `;
      return;
    }
;

    favoritesContainer.innerHTML = favorites
      .map(
        (planet) => `

            <div class="planet-card">

             <section class="planets">
                <span class="planet planet-image img" id="${planet.name.toLowerCase()}"></span> 
            </section>
                
                <div class="container">
                    <h4>${planet.name}</h4>
                </div>
                <button class="removeButton" data-planet="${planet.name}">Ta bort favorit</button>
            </div>   
        `
      )
      .join("");

    // Add event listeners to remove buttons
    document.querySelectorAll(".removeButton").forEach((button) => {
      button.addEventListener("click", (event) => {
        const planetName = event.target.getAttribute("data-planet");
        removePlanetFromFavorites(planetName);
      });
    });
  }
});

//Anna
function removePlanetFromFavorites(planetName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter((planet) => planet.name !== planetName);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  location.reload();
}
