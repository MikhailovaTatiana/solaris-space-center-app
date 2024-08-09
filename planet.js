// Anna, Michael
function createPlanetInfo(selectedPlanet) {
  const planetInfoContainer = document.querySelector(".planet-info");

  const activePlanetClassName = `${selectedPlanet.name.toLowerCase()}`;
  console.log(activePlanetClassName);

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
                    <ul id="moons"></ul>
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

  // Update the left side half circle based on the planet name
  updatePlanetColor(selectedPlanet.name.toLowerCase());

  addMoonsList(selectedPlanet);
}



function updatePlanetColor(planetId) {
  const planetElement = document.querySelector(".active-planet");

  planetElement.classList.remove(
    "sun-color",
    "mercury-color",
    "venus-color",
    "earth-color",
    "mars-color",
    "jupiter-color",
    "saturn-color"
  );

  // Add the new planet color class to the left side half circle
  if (planetId === "solen") {
    planetElement.style.backgroundColor = "var(--sun-color)";
  } else if (planetId === "merkurius") {
    planetElement.style.backgroundColor = "var(--mercury-color)";
  } else if (planetId === "venus") {
    planetElement.style.backgroundColor = "var(--venus-color)";
  } else if (planetId === "jorden") {
    planetElement.style.backgroundColor = "var(--earth-color)";
  } else if (planetId === "mars") {
    planetElement.style.backgroundColor = "var(--mars-color)";
  } else if (planetId === "jupiter") {
    planetElement.style.backgroundColor = "var(--jupiter-color)";
  } else if (planetId === "saturnus") {
    planetElement.style.backgroundColor = "var(--saturn-color)";
  } else if (planetId === "neptunus") {
    planetElement.style.backgroundColor = "var(--neptune-color)";
  } else if (planetId === "uranus") {
    planetElement.style.backgroundColor = "var(--uranus-color)";
  } else {
    planetElement.style.backgroundColor = "var(--sun-color)";
  }
}

// Anna
function addPlanetToFavorites(planet) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if planet is already in favorites
  if (!favorites.find((fav) => fav.name === planet.name)) {
    favorites.push(planet);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    // alert(`${planet.name} has been added to favorites.`);
    window.location.href = "favorites.html";
  } else {
    alert(`${planet.name} is already in favorites.`);
    window.location.href = 'favorites.html'
  }
}

// Tatiana
function submitPlanetToFavorites(planet) {
  let btn = document.querySelector("#add-favorite-btn");
  btn.addEventListener("click", () => {
    addPlanetToFavorites(planet);
  });
}

// Tatiana
function addMoonsList(planet) {
  let moonsList = planet.moons;
  let ulRef = document.querySelector("#moons");
  if (moonsList.length > 0) {
    moonsList.forEach((moon) => {
      let li = document.createElement("li");
      li.innerHTML = moon;
      ulRef.appendChild(li);
    });
  } else {
    let li = document.createElement("li");
    li.innerHTML = "-";
    ulRef.appendChild(li);
  }
}
