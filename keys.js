const HIDDEN_KEY = 'solaris-ngfeNG1iaq9Q2PJK';


//  1) fetch and save API key
//Alla
async function fetchPlanetsApiKey() {
    let url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys';
    let response = await fetch(url, { 
        method: 'POST'
    });
    let data = await response.json();
    return data.key;
}


// console.log(fetchPlanetsApiKey());
