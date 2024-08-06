// One function per person!
// Anna, Louise, Michael, Tatiana

// 1) see the fetch in keys.js


//  2) fetch data using the key
// Louise
async function fetchPlanets() {
    let response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', { 
        method: 'GET',
        headers: { 'x-zocom' : HIDDEN_KEY}
       
    });
    let data = await response.json();
    console.log(data);
    
    return data.bodies;
}

//  3) display data in local storage
// storePlanets();

//  4) window addeventlistener function

window.addEventListener("load", async () => {
  let key = fetchPlanetsApiKey();
//   console.log('key', key);
  
  let planetsList = await fetchPlanets(key);
//   console.log('planetsList', planetsList);
  

//   storePlanets();
});

function createPlanetCards() {}
