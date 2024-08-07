// See the fetch in hidden_key.js locally

// Alla
// Window addeventlistener function
window.addEventListener("load", async () => {
  let key = fetchPlanetsApiKey();
  let planetList = await fetchPlanets(key);
  storePlanets(planetList);
  
});

// Alla
// Fetch data using the key
async function fetchPlanets() {
    let response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
            method: "GET",
            headers: { "x-zocom": HIDDEN_KEY },
        }
    );
    let data = await response.json();
    console.log(data);
    return data.bodies;
}







// Alla
// Display data in local storage
function storePlanets(planetList) {
  localStorage.setItem('planetList', JSON.stringify(planetList));  
};

// setItem(); add key and value to localStorage

// TODO

// Create temlpate for a planet
// function createPlanetCards() {};

// Create a single planet info
// function createPlanetInfo() {};