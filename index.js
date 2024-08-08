// Alla
// Window addeventlistener function
window.addEventListener("DOMContentLoaded", async () => {

  let key = fetchPlanetsApiKey();
  let planetList = await fetchPlanets(key);
  storePlanets(planetList);
  changePageHeader();
  let planetName = choosePlanet();
  createPlanetInfo(planetName); // do toLowerCase() before comparing
});


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


// Anna
function choosePlanet() {
  let planetNamesList = document.querySelectorAll(".planet");
  planetNamesList.forEach((planet) => {
    planet.addEventListener("click", () => {
      const planetName = planet.id.toString();
      window.location.href = `planet.html?planet=${encodeURIComponent(planetName)}`;
    });
  });
}
