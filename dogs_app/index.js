console.log("JavaScript loaded");

baseURL = "http://localhost:3000";
dogsURL = `${baseURL}/dogs`;

fetch(dogsURL)
  .then(parseJSON)
  .then(displayDogs);

function displayDogs(dogs) {
  console.log("dogs", dogs);


}

function parseJSON(response) {
  return response.json()
}