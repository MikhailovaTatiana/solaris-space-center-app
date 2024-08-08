window.addEventListener("load", async () => {
  let key = fetchPlanetsApiKey();
  let planetList = await fetchPlanets(key);
  storePlanets(planetList);
  changePageHeader();

  choosePlanet();
  let selectedPlanetId = localStorage.getItem('selectedPlanetId');
  let selectedPlanet = getStoredPlanetData(selectedPlanetId);

  createPlanetInfo(selectedPlanet);

  sendUserToFavorites();

  localStorage.clear();
});

// Louise, Tatiana
// when clicking on planet, redirect from home page to single planet page
function choosePlanet() {
  let planetNamesList = document.querySelectorAll(".planet");    
  planetNamesList.forEach((planet, i) => {
      planet.addEventListener("click", () => { 
          localStorage.setItem('selectedPlanetId', i);     
          window.open("planet.html", "_self");
      });       
  });
}

// Alla
function getStoredPlanetData(index) {
  let planets = JSON.parse(localStorage.getItem('planetList'));
  return planets[index];
  // const storedData = localStorage.getItem("planetList");
  // return storedData ? JSON.parse(storedData[index]) : [];
}



// Tatiana, Louise
// Hover effect with header's name changing
function changePageHeader() {
  let planetNames = document.querySelectorAll(".planet"); // Array
  let h1Ref = document.querySelector("h1");

  planetNames.forEach((planet) => {
    planet.addEventListener("mouseover", () => {
      h1Ref.innerHTML = `${planet.id.toString()}`;
    });
    planet.addEventListener("mouseout", () => {
      h1Ref.innerHTML = "Solsystemet";
    });
  });
}

// Alla
// Fetch data using the key
async function fetchPlanets() {
  let response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
    method: "GET",
    headers: { "x-zocom": HIDDEN_KEY },
  });
  let data = await response.json();
  console.log(data);
  return data.bodies;
}

// Alla
// Display data in local storage
function storePlanets(planetList) {
  localStorage.setItem("planetList", JSON.stringify(planetList));
}




// TODO
// Create temlpate for a planet
// function createPlanetCards() {};