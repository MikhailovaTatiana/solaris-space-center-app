// Anna och Michael

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
// Retrieve planet data from localStorage
// Waiting to clarify with the other group on how they fetched the selectedPlanet
// Leaving this function as our version for now
function getStoredPlanetData() {
    const storedData = localStorage.getItem('planetList');
    return storedData ? JSON.parse(storedData) : [];
}
const planetList = getStoredPlanetData();
// console.log(planetList[4]);
// console.log(planetList);
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------



// Anna och Michael
// Displays Planet Data
function createPlanetInfo(selectedPlanet) {

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
    // we will get this variable from the click function later
    selectedPlanet = planetList[1]
    // console.log('selectedPlanet', selectedPlanet);
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


    const planetInfoContainer = document.querySelector('.planet-info');
    planetInfoContainer.innerHTML = '';

    console.log(planetInfoContainer.textContent);

    const planetInfo = document.querySelector('.planet-info');




    //  Populate the HTML elements with the planet data.
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

    `
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//this will be an event click
createPlanetInfo();
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------