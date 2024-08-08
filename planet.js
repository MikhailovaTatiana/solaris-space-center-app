// Anna
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Anna och Michael
// Retrieve planet data from localStorage
function getStoredPlanetData() {
  const storedData = localStorage.getItem("planetList");
  return storedData ? JSON.parse(storedData) : [];
}

// Anna och Michael
// Displays Planet Data
function createPlanetInfo() {
  const planetList = getStoredPlanetData();
  const selectedPlanetName = getQueryParameter("planet");

  if (!selectedPlanetName) {
    // console.error("No planet selected");
    return;
  }

  const selectedPlanet = planetList.find(
    (planet) => planet.name.toLowerCase() === selectedPlanetName
  );

  if (!selectedPlanet) {
    console.error("Planet not found");
    return;
  }

  const planetInfoContainer = document.querySelector(".planet-info");
  if (planetInfoContainer) {
    planetInfoContainer.innerHTML = `
        <div>
          <h1 class="planet-name">${selectedPlanet.name}</h1>
          <h2 class="planet-name-latin">${selectedPlanet.latinName}</h2>
        </div>
        <p class="planet-description">${selectedPlanet.desc}</p>
        <article class="planet-data">
          <section class="info-left">
            <h5>OMKRETS </h5>
            <p class="omkrets-data">${selectedPlanet.circumference}</p><br>
            <h5>MAX TEMPERATUR</h5>
            <p class="max-temperature">${selectedPlanet.temp.day}</p><br>
            <h5>MÅNAR</h5>
            <ul>
              <li>Månen</li>
            </ul>
          </section>
          <section class="info-right">
            <h5>KM FRÅN SOLEN</h5>
            <p class="distance-from-sun">${selectedPlanet.distance}</p><br>
            <h5>MIN TEMPERATUR</h5>
            <p class="min-temperature">${selectedPlanet.temp.night}</p><br>
            <button id="add-favorite-btn">lägg till som favorit</button>
          </section>                    
        </article>
      `;


 // Add event listener to the favorite button
 const addFavoriteBtn = document.getElementById('add-favorite-btn');
 if (addFavoriteBtn) {
   addFavoriteBtn.addEventListener('click', () => {
     addPlanetToFavorites(selectedPlanet);
   });
 }
} else {
 console.error('Element with class "planet-info" not found.');
}

}

function addPlanetToFavorites(planet) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Check if planet is already in favorites
    if (!favorites.find(fav => fav.name === planet.name)) {
      favorites.push(planet);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${planet.name} has been added to favorites.`);
      window.location.href = 'favorites.html'

    } else {
      alert(`${planet.name} is already in favorites.`);
       window.location.href = 'favorites.html'
    }
  }

document.addEventListener("DOMContentLoaded", createPlanetInfo);
