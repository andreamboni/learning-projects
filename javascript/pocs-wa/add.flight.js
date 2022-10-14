const http = new httpLib;
const departure = document.querySelector("#departure");
const arrival = document.querySelector("#arrival");
const flightClass = document.querySelector("#flight-class");
const terminal = document.querySelector("#terminal");
const flightNumber = document.querySelector("#flight-number");

document
  .querySelector(".add-flight-button")
  .addEventListener("click", addFlight);

function addFlight(event) {
  const request = {
    "departure": departure.value,
    "arrival": arrival.value,
    "flightClass": flightClass.value,
    "terminal": terminal.value,
    "flightNumber": flightNumber.value
  };

  console.log("Request", request)

  http.post('http://localhost:8080/flight', request, function(response) {
    console.log(response)
  })
  
  clearForm()

}

function clearForm() {
  departure.value = ''
  arrival.value = ''
  flightClass.value = ''
  terminal.value = ''
  flightNumber.value = ''
}